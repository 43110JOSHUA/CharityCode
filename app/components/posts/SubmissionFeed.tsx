"use client";

import React, { useEffect, useState } from "react";
import Submission from "./Submission";
import { doc, onSnapshot, DocumentData } from "firebase/firestore";
import { firestore } from "../../../firebase/client";
import { formatDistanceToNow } from "date-fns";

interface SubmissionFeedProps {
  postId: string;
}

interface SubmissionData {
  username: string;
  githubLink: string;
  timestamp: any; // Changed from Date to any to handle various timestamp formats
}

export default function SubmissionFeed({ postId }: SubmissionFeedProps) {
  const [submissions, setSubmissions] = useState<SubmissionData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const postRef = doc(firestore, "posts", postId);

    const unsubscribe = onSnapshot(postRef, (doc) => {
      if (doc.exists()) {
        const data = doc.data() as DocumentData;
        const submissionsData = data.submissions || [];

        // Sort submissions by timestamp (newest first)
        const sortedSubmissions = submissionsData.sort(
          (a: SubmissionData, b: SubmissionData) => {
            const timeA = a.timestamp.toDate();
            const timeB = b.timestamp.toDate();
            return timeB.getTime() - timeA.getTime();
          }
        );

        setSubmissions(sortedSubmissions);
      } else {
        setSubmissions([]);
      }
      setLoading(false);
    });

    return unsubscribe;
  }, [postId]);

  if (loading) {
    return (
      <div className="card bg-tan">
        <div className="card-body">
          <h5 className="card-title mb-3">
            <i className="bi bi-list-ul me-2"></i>
            Current Submissions
          </h5>
          <p className="text-muted mb-0">Loading submissions...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="card bg-tan">
      <div className="card-body">
        <h5 className="card-title mb-3">
          <i className="bi bi-list-ul me-2"></i>
          Current Submissions ({submissions.length})
        </h5>

        {submissions.length > 0 ? (
          <div className="list-group list-group-flush">
            {submissions.map((submission, index) => (
              <Submission
                key={index}
                username={submission.username}
                githubLink={submission.githubLink}
                timestamp={formatDistanceToNow(submission.timestamp.toDate(), { addSuffix: true })}
              />
            ))}
          </div>
        ) : (
          <p className="text-muted mb-0">
            No submissions yet. Be the first to contribute!
          </p>
        )}
      </div>
    </div>
  );
}
