package com.opt.consultanttp.services.interfaces;

import com.opt.consultanttp.models.consultants.Consultant;
import com.opt.consultanttp.models.consultants.ConsultantSearchOptions;

import java.util.List;

public interface ConsultantServiceInterface {

    public List<Consultant> allConsultants(ConsultantSearchOptions s);
    public Consultant getConsultantById(String id) throws Exception;
    public Consultant removeConsultantById(String id) throws Exception;
    public Consultant updateConsultantById(String id,Consultant s) throws Exception;
    public Consultant addConsultant(Consultant s);


}
