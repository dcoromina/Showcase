import React from "react";
const obj = `{"objectType": "list",
    "uri": "",
    "data": [
        {
        "id": "57dafe43317467e7b0ef5276",
        "projectId": "54c17e92e4b0bc49e27d9398",
        "number": 5,
        "startingUserId": "57a28b28961401f240812caf",
        "queued": 1473969731915,
        "started": 1473969754283,
        "completed": 1473969762970,
        "status": "Succeeded",
        "commitId": "1c6e8aa47951e39f9a905f0077af9355c35b712b",
        "executor": "us-west-2:i-007942020ce7baeb5",
        "outputCommitId": "73fe9481fe635bada713246c3c739beefa424e8c",
        "title": "Run with great R^2 of 1!",
        "isArchived": false,
        "postProcessedTimestamp": 1473969767822,
        "diagnosticStatistics": {
            "isError": false,
            "data": [
            {
                "key": "R^2",
                "value": "1.000"
            }
            ]
        },
        "isCompleted": true,
        "hardwareTierId": "gpu"
        }
    ]
}`;

const PreviewCode = () => {
  return (
    <pre>
      <code>{obj}</code>
    </pre>
  );
};

export default PreviewCode;
