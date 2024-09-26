package com.ust.sustainability.serviceImpl;

import com.ust.sustainability.model.ReportConfig;
import com.ust.sustainability.repository.ReportConfigRepo;
import com.ust.sustainability.service.ReportConfigService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ReportConfigServiceImpl implements ReportConfigService {

    @Autowired
    private ReportConfigRepo reportConfigRepo;

    @Override
    public List<ReportConfig> getAllReportConfigs() {
        return reportConfigRepo.findAll();
    }
}
