package com.ust.sustainability.model;

import java.util.List;

public class Table {
    private String question_id;
    private String table_id;
    private String note;
    private List<String> labels;
    private List<RowInput> rowInputs;

    // Getters and setters

    public String getQuestion_id() {
        return question_id;
    }

    public void setQuestion_id(String question_id) {
        this.question_id = question_id;
    }

    public String getTable_id() {
        return table_id;
    }

    public void setTable_id(String table_id) {
        this.table_id = table_id;
    }

    public String getNote() {
        return note;
    }

    public void setNote(String note) {
        this.note = note;
    }

    public List<String> getLabels() {
        return labels;
    }

    public void setLabels(List<String> labels) {
        this.labels = labels;
    }

    public List<RowInput> getRowInputs() {
        return rowInputs;
    }

    public void setRowInputs(List<RowInput> rowInputs) {
        this.rowInputs = rowInputs;
    }
}
