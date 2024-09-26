import { createSlice } from "@reduxjs/toolkit";

const reportingSlice = createSlice({
  name: "reporting",
  initialState: {
    reportingData: [],
    isSaved: false,
    LookupTable:[],
    activeTabKey: null,
    ReportForm: {},
    emissionSaved: {},
    SwitchState: {}, 
  },
  reducers: {
    setactiveTabKey(state, action) {
      state.activeTabKey = action.payload;
    },
    setreportingData(state, action) {
      state.reportingData = action.payload;
      const energyTab = action.payload.find((data) => data.pillarName === "Energy");
      state.activeTabKey = energyTab ? energyTab.pillarName : action.payload[0].pillarName;
    },
    setLookupTable(state,action)
    {
        state.LookupTable=action.payload;
    },
    setisSaved(state, action) {
      state.isSaved = action.payload;
    },
    setReportForm: (state, action) => {
        const { pillarName, questionId, inputId, value } = action.payload;
      
        // Ensure pillarName and questionId exist in the form
        state.ReportForm[pillarName] = state.ReportForm[pillarName] || {};
        state.ReportForm[pillarName][questionId] = state.ReportForm[pillarName][questionId] || { inputFields: {} };
      
        // Store the input value
        state.ReportForm[pillarName][questionId].inputFields[inputId] = value;
      },
      resetReportForm(state, action) {
        const { pillarName } = action.payload;
        // Reset the form for the specified pillarName
        if (state.ReportForm[pillarName]) {
          state.ReportForm[pillarName] = {};
        }
      },
    setSwitchState: (state, action) => {
      const { pillarName, questionId, value } = action.payload;
      if (!state.SwitchState[pillarName]) {
        state.SwitchState[pillarName] = {};
      }
      if (!state.SwitchState[pillarName][questionId]) {
        state.SwitchState[pillarName][questionId] = {};
      }
      state.SwitchState[pillarName][questionId] = value;
    },
    setEmissionSaved: (state, action) => {
        const { pillarName, questionId, value } = action.payload;
      
        // If the pillar doesn't exist yet, initialize it
        if (!state.emissionSaved[pillarName]) {
          state.emissionSaved[pillarName] = {};
        }
      
        // Store the emission value by questionId under the corresponding pillarName
        state.emissionSaved[pillarName][questionId] = value;
      },
      resetEmissionSaved(state, action) {
        const { pillarName } = action.payload;
        // Reset the form for the specified pillarName
        if (state.emissionSaved[pillarName]) {
          state.emissionSaved[pillarName] = {};
        }
      },
      populateReportForm: (state, action) => {
        const SavedData = action.payload;
  
        SavedData.forEach((pillar) => {
          pillar.reportQuestionAnwsers.forEach((question) => {
            question.response.forEach((response) => {
              response.answers.forEach((answer) => {
                // Set the ReportForm with the answer value for each field
                state.ReportForm[pillar.pillar_name] = state.ReportForm[pillar.pillar_name] || {};
                state.ReportForm[pillar.pillar_name][question.questionId] =
                  state.ReportForm[pillar.pillar_name][question.questionId] || { inputFields: {} };
  
                state.ReportForm[pillar.pillar_name][question.questionId].inputFields[answer.fieldId] = answer.value;
              });
  
              // Optionally, store the emissionSaved value for each question
              state.emissionSaved[pillar.pillar_name] = state.emissionSaved[pillar.pillar_name] || {};
              state.emissionSaved[pillar.pillar_name][question.questionId] = response.emissionSaved;
            });
          });
        });
      },
    },
});

export const { setreportingData, setactiveTabKey, setisSaved, setReportForm,setLookupTable,setEmissionSaved, setSwitchState,resetReportForm,resetEmissionSaved,populateReportForm } = reportingSlice.actions;
export default reportingSlice.reducer;
