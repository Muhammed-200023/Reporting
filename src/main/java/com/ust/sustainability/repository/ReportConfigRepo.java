package com.ust.sustainability.repository;

import com.ust.sustainability.model.ReportConfig;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ReportConfigRepo extends MongoRepository<ReportConfig, String> {
}
