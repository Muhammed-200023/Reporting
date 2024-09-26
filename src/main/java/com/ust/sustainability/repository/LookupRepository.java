package com.ust.sustainability.repository;

import com.ust.sustainability.model.Lookup;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface LookupRepository extends MongoRepository<Lookup, String> {

}
