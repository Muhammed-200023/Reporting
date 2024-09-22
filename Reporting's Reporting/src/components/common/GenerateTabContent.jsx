import React, { useState, useEffect } from "react";
import Addbtn from "./Button/Addbtn";
import Deletebtn from "./Button/Deletebtn";
import { Button, Input, Switch } from "antd";
import { QuestionGenerator } from "./QuestionGenerator";
import { TablesGenerator } from "./TablesGenerator";
import { useDispatch, useSelector } from "react-redux";
import {setReportForm,setSwitchState,setEmissionSaved} from "../../redux/slices/reportingSlice";

const GenerateTabContent = ({ Data }) => {
  const dispatch = useDispatch();
  const { ReportForm, SwitchState, LookupTable, emissionSaved } = useSelector(
    (state) => state.reporting
  );

  const handleInputChange = (pillarName, questionId, inputId, value) => {
    dispatch(setReportForm({ pillarName, questionId, inputId, value }));
  };

  const handleCalculation = (pillarName, questionId, ReportForm, Lookup) => {
    // Get the inputs for the given question
    const inputs = ReportForm[pillarName]?.[questionId]?.inputFields;
    if (
      inputs === undefined ||
      inputs === null ||
      Object.keys(inputs).length === 0
    ) {
      console.error("Inputs are undefined, null, or empty");
      return;
    }

    // Find the corresponding pillar in the lookup
    const pillarData = Lookup.find(
      (pillar) => pillar.pillarName === pillarName
    );
    if (!pillarData) {
      console.error("No matching pillar found in lookup");
      return;
    }

    // Find the question in the lookup
    const questionData = pillarData.question.find(
      (question) => question.questionId === questionId
    );
    if (!questionData) {
      console.error("No matching question found in lookup");
      return;
    }

    // Find the correct lookup entry by matching the input fields
    const lookupEntry = questionData.lookup.find((entry) => {
      return Object.keys(inputs).every((inputFieldId) => {
        // Only compare fields that exist in both inputs and entry
        if (entry.hasOwnProperty(inputFieldId)) {
          // console.log(
          //   `Comparing field ${inputFieldId}: ${inputs[inputFieldId]} with entry: ${entry[inputFieldId]}`
          // );
          return String(inputs[inputFieldId]) === String(entry[inputFieldId]);
        } else {
          // console.log(
          //   `Skipping field ${inputFieldId} as it doesn't exist in entry`
          // );
          return true; // Ignore this field in the comparison
        }
      });
    });

    // console.log("Resulting lookupEntry:", lookupEntry);
    if (!lookupEntry) {
      console.error("No matching lookup entry found");
      return;
    }

    // Get the reference value
    const referenceValue = lookupEntry.referenceValue;

    // Perform the calculation using the formula
    let formula = questionData.formula;

    // Replace placeholders in the formula with actual input field values
    Object.keys(inputs).forEach((inputFieldId) => {
      formula = formula.replace(inputFieldId, inputs[inputFieldId]);
    });

    // Replace 'referenceValue' placeholder with the actual reference value
    formula = formula.replace("referenceValue", referenceValue);

    // Evaluate the formula (use a safe evaluation function to avoid security risks)
    try {
      const result = eval(formula); // Consider using a safe eval library
      console.log(result);
      // Dispatch the result to the Redux store
      dispatch(setEmissionSaved({ pillarName, questionId, value: result }));
    } catch (error) {
      console.error("Error evaluating formula:", error);
    }
  };

  // Function to render question content
  const QuestionContent = (Data) => {
    const handleSwitchChange = (pillarName, questionId, value) => {
      dispatch(setSwitchState({ pillarName, questionId, value }));
    };

    return Data?.questions?.map((question, index) => (
      <div key={index} className="w-auto mb-3 mt-3 flex p-4">
        {question?.question ? (
          <div className="question-container flex-1 ml-5">
            <div className="question-box flex items-center">
              <p className="question-text font-semibold">
                {index + 1}. {question.question}
              </p>
              <div className="ml-3 pr-5">
                <Switch
                  checkedChildren="Yes"
                  unCheckedChildren="No"
                  onChange={(value) =>
                    handleSwitchChange(
                      Data.pillarName,
                      question.question_id,
                      value
                    )
                  }
                  defaultChecked={false}
                />
              </div>
            </div>

            {SwitchState?.[Data.pillarName]?.[question.question_id] && (
              <div>
                <div className="mt-[5px] ml-[15px] border-[1px] p-[10px] border-dashed border-[#014D4E] rounded-[10px] flex justify-between items-start mr-[75px]">
                  <div>
                    {QuestionGenerator(
                      question.text,
                      question.inputFields,
                      question.question_id,
                      handleInputChange,
                      Data.pillarName,
                      ReportForm
                    )}
                  </div>
                  <div className="ml-[10px] flex flex-col gap-1 justify-center">
                    <Addbtn />
                    <Deletebtn />
                  </div>
                </div>
                <div className="mt-2 ml-[15px]">
                  {emissionSaved?.[Data.pillarName]?.[question.question_id] && (
                    <h1 className="mt-4 mb-4 font-semibold">
                      EmissionSaved:
                      <Input 
                        className="w-[75px] bg-[#EAF5FF] ml-[4px]"
                        value={
                          emissionSaved[Data.pillarName][question.question_id]
                        }
                      />
                    </h1>
                  )}
                  <Button
                    className="bg-[#014D4E] text-white"
                    onClick={() =>
                      handleCalculation(
                        Data.pillarName,
                        question.question_id,
                        ReportForm,
                        LookupTable
                      )
                    }
                  >
                    Calculate
                  </Button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className="flex-1 ml-5 mr-15 flex justify-between items-start">
            <div>
              {QuestionGenerator(
                question.text,
                question.inputFields,
                question.questionId,
                handleInputChange,
                Data.pillarName 
              )}
            </div>
            <div className="ml-[10px] flex flex-col gap-1 justify-center">
              <Addbtn />
              <Deletebtn />
            </div>
          </div>
        )}
      </div>
    ));
  };

  // Function to render table content
  const TableContent = (Data) => {
    return Data?.tables?.map((table, tableIndex) => (
      <div key={tableIndex} className="mt-3 p-[30px]">
        {TablesGenerator({
          questionId: table.question_id,
          labels: table.labels,
          rowInputs: table.rowInputs,
          tableId: table.table_id,
          note: table.note,
          pillarName: Data.pillarName,
          handleInputChange,
          ReportForm,
        })}
        <div className="mt-2 ml-[15px]">
          {emissionSaved?.[Data.pillarName]?.[table.question_id] && (
            <h1 className="mt-4 mb-4 font-semibold">
              EmissionSaved:
              <Input 
                className="w-[75px] bg-[#EAF5FF] ml-[4px]"
                value={emissionSaved[Data.pillarName][table.question_id]}
              />
            </h1>
          )}
          <Button
            className="bg-[#014D4E] text-white"
            onClick={() =>
              handleCalculation(
                Data.pillarName,
                table.question_id,
                ReportForm,
                LookupTable
              )
            }
          >
            Calculate
          </Button>
        </div>
      </div>
    ));
  };

  useEffect(() => {
    const fields = ReportForm;

    console.log(fields);
    // console.log(SwitchState);
  }, [ReportForm]);

  // useEffect(() => {
  //   console.log(emissionSaved);
  // });

  return (
    <>
      {QuestionContent(Data)}
      {TableContent(Data)}
    </>
  );
};

export default GenerateTabContent;
