package com.ust.sustainability.model;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import java.util.List;

@Document(collection = "report_config")
public class ReportConfig {

    @Id
    private String _id;
    private String id;
    private String pillar_id;
    private Number year;
    private String pillarName;

    private List<Question> questions;
    private List<Table> tables;

    // Getters and setters

    public Number getYear() {
        return year;
    }

    public void setYear(Number year) {
        this.year = year;
    }

    public String getPillar_id() {
        return pillar_id;
    }

    public void setPillar_id(String pillar_id) {
        this.pillar_id = pillar_id;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String get_id() {
        return _id;
    }

    public void set_id(String _id) {
        this._id = _id;
    }

    public String getPillarName() {
        return pillarName;
    }

    public void setPillarName(String pillarName) {
        this.pillarName = pillarName;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }

    public List<Table> getTables() { // Add getter for tables
        return tables;
    }

    public void setTables(List<Table> tables) { // Add setter for tables
        this.tables = tables;
    }
}
