// import axios from "axios";
// import { setisSaved } from '../../../redux/slices/reportingSlice';

// const handleReportSave = (dispatch, reportingData, reportForm, switchState, emissionSaved, activeTabKey, supplierId) => {
   
//     const payload = reportForm.map((pillar) => {
  
//     const responses = pillar.reportQuestionAnwsers.map((question) => {
//       const isSelected = switchState[pillar.pillarName]?.[question.questionId] || false;
//       const response = reportForm[pillar.pillarName]?.[question.questionId]?.inputFields || {};
      
//       const answers = Object.keys(response).map((fieldId) => ({
//         fieldId,
//         value: response[fieldId],
//       }));
      
//       return {
//         questionId: question.questionId,
//         isSelected,
//         totalEmissionSaved: emissionSaved[pillar.pillarName]?.[question.questionId] || "0",
//         response: [
//           {
//             emissionSaved: emissionSaved[pillar.pillarName]?.[question.questionId] || "0",
//             answers,
//           }
//         ]
//       };
//     });

//     return {
//       id: "",  // Add actual value if needed
//       supplierId,  // Use the supplier ID passed from the component
//       year: "2024",  // Replace with dynamic year if necessary
//       pillar_report_id: "pillar_report_id",  // Placeholder
//       pillar_id: "pillar_id",  // Placeholder
//       pillar_name: pillar.pillarName,
//       reportQuestionAnwsers: responses,
//       reportTableAnwsers: [],  // Handle if needed
//       updated_dt: "",  // Add actual updated date if necessary
//       updated_user: "",  // Add actual user information if necessary
//     };
//   });

//   // Call the API to save the report data
//   axios.post("http://localhost:8080/api/save", payload)
//     .then((response) => {
//       console.log("Save successful", response.data);
   
//     })
//     .catch((error) => {
//       console.error("Error saving report:", error);
//     });
// };

// export default handleReportSave;
