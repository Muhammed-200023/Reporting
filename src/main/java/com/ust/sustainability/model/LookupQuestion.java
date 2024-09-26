package com.ust.sustainability.model;

import com.fasterxml.jackson.annotation.JsonInclude;

import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)

public class LookupQuestion {
    private String formulaId;
    private String formula;
    private String questionId;
    private List<LookupValue> lookup;

    // Getters and setters
    public String getFormulaId() {
        return formulaId;
    }

    public void setFormulaId(String formulaId) {
        this.formulaId = formulaId;
    }

    public String getFormula() {
        return formula;
    }

    public void setFormula(String formula) {
        this.formula = formula;
    }

    public String getQuestionId() {
        return questionId;
    }

    public void setQuestionId(String questionId) {
        this.questionId = questionId;
    }

    public List<LookupValue> getLookup() {
        return lookup;
    }

    public void setLookup(List<LookupValue> lookup) {
        this.lookup = lookup;
    }

    // Inner class representing each lookup value
    @JsonInclude(JsonInclude.Include.NON_NULL)

    public static class LookupValue {
        private String field_id_1;
        private String field_id_2;
        private String field_id_3;
        private String field_id_4;
        private String field_id_5;

        private String referenceValue;

        // Getters and setters

        public String getField_id_5() {
            return field_id_5;
        }

        public void setField_id_5(String field_id_5) {
            this.field_id_5 = field_id_5;
        }

        public String getField_id_4() {
            return field_id_4;
        }

        public void setField_id_4(String field_id_4) {
            this.field_id_4 = field_id_4;
        }

        public String getField_id_3() {
            return field_id_3;
        }

        public void setField_id_3(String field_id_3) {
            this.field_id_3 = field_id_3;
        }

        public String getField_id_2() {
            return field_id_2;
        }

        public void setField_id_2(String field_id_2) {
            this.field_id_2 = field_id_2;
        }

        public String getField_id_1() {
            return field_id_1;
        }

        public void setField_id_1(String field_id_1) {
            this.field_id_1 = field_id_1;
        }

        public String getReferenceValue() {
            return referenceValue;
        }

        public void setReferenceValue(String referenceValue) {
            this.referenceValue = referenceValue;
        }
    }
}
