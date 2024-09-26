package com.ust.sustainability.controller;

import com.ust.sustainability.model.ReportConfig;
import com.ust.sustainability.service.ReportConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/report")
public class ReportConfigController {

    @Autowired
    private ReportConfigService reportConfigService;

    @GetMapping
    public List<ReportConfig> getAllReportConfigs() {
        return reportConfigService.getAllReportConfigs();
    }
}
