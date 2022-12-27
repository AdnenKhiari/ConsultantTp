package com.opt.consultanttp.repositories;

import com.opt.consultanttp.models.consultants.Consultant;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ConsultantRepository extends MongoRepository<Consultant,String> {
    //Write any custom query here !
}
