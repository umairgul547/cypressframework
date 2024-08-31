import { generateRandomString } from "../../support/utils/generateRandomString";

describe("Testing Apis related to MEMEBER",()=>{

  let memberId = "cypress-auto-"+generateRandomString(5);

  it("should hit member API",()=>{
    const baseUrl = "https://narbu-lms20-api-np.pampersrewards.com/api/members";
    const payLoad = {"program_code": "IN", "country_code":"IN","member_id":memberId,"is_suspended": false, "location_code": "Mobile_IN", "wallet_code": [{"code":"default_wallet"}]}

    cy.request({
        method: 'POST',
        url: baseUrl,
        body: payLoad,
        headers: {
          'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6W3sibW9kdWxlIjoiTWVtYmVycyIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiTWVtYmVycyIsImFjdGlvbiI6InVwZGF0ZSJ9LHsibW9kdWxlIjoiTWVtYmVySW50ZXJhY3Rpb25zIiwiYWN0aW9uIjoidXBkYXRlIn0seyJtb2R1bGUiOiJNZW1iZXJzIiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiTWVtYmVyVmFyaWFibGVzIiwiYWN0aW9uIjoiY3JlYXRlIn0seyJtb2R1bGUiOiJJZGVudGlmaWVycyIsImFjdGlvbiI6InJlYWQifSx7Im1vZHVsZSI6IlJlZGVtcHRpb24iLCJhY3Rpb24iOiJjcmVhdGUifSx7Im1vZHVsZSI6IlJlZGVtcHRpb24iLCJhY3Rpb24iOiJ1cGRhdGUifSx7Im1vZHVsZSI6IkZ1bGZpbGxtZW50IiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiTWVtYmVyTWlsZXN0b25lIiwiYWN0aW9uIjoiY3JlYXRlIn0seyJtb2R1bGUiOiJFdmVudCIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25IaXN0b3J5IiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25CeVJlZmVyZW5jZSIsImFjdGlvbiI6InJlYWQifSx7Im1vZHVsZSI6IlJlZmVycmFsQ29kZSIsImFjdGlvbiI6InVwZGF0ZSJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25Qcm9kdWN0cyIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiUmVmZXJyYWxDb2RlIiwiYWN0aW9uIjoiY3JlYXRlIn1dLCJpYXQiOjE3MjQyNDY2NjksImV4cCI6MTcyNTExMDY2OSwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIn0.Bjotg-sb7WBjWA6hjHsB0cm8_Jv1EYYHrB_mSazNIIQ',
          'Content-Type': 'application/json',
        }    
    }).then((response) =>{
      expect(response.status).to.eq(201);
      cy.log(response.body.message);
      cy.log(response.body.data.member_id);
      expect(response.body.message).to.eq('Member created successfully');
      expect(response.body.data.member_id).to.eq(memberId);
    })
    
    

  })

  it('interaction shoould assigned successfully', () => {
    const baseUrl ="https://narbu-lms20-api-np.pampersrewards.com/api/earn";
    const payLoad ={
        "program_code": "IN",
        "location_code": "Mobile_IN",
        "earn_type": "Event",
        "member_id":memberId,
        "wallet_code": "default_wallet",
        "code": "IN_RAF_Referrer" 
    }
cy.request ({
    method : 'POST',
    url : baseUrl,
    body : payLoad,

    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6W3sibW9kdWxlIjoiTWVtYmVycyIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiTWVtYmVycyIsImFjdGlvbiI6InVwZGF0ZSJ9LHsibW9kdWxlIjoiTWVtYmVySW50ZXJhY3Rpb25zIiwiYWN0aW9uIjoidXBkYXRlIn0seyJtb2R1bGUiOiJNZW1iZXJzIiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiTWVtYmVyVmFyaWFibGVzIiwiYWN0aW9uIjoiY3JlYXRlIn0seyJtb2R1bGUiOiJJZGVudGlmaWVycyIsImFjdGlvbiI6InJlYWQifSx7Im1vZHVsZSI6IlJlZGVtcHRpb24iLCJhY3Rpb24iOiJjcmVhdGUifSx7Im1vZHVsZSI6IlJlZGVtcHRpb24iLCJhY3Rpb24iOiJ1cGRhdGUifSx7Im1vZHVsZSI6IkZ1bGZpbGxtZW50IiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiTWVtYmVyTWlsZXN0b25lIiwiYWN0aW9uIjoiY3JlYXRlIn0seyJtb2R1bGUiOiJFdmVudCIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25IaXN0b3J5IiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25CeVJlZmVyZW5jZSIsImFjdGlvbiI6InJlYWQifSx7Im1vZHVsZSI6IlJlZmVycmFsQ29kZSIsImFjdGlvbiI6InVwZGF0ZSJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25Qcm9kdWN0cyIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiUmVmZXJyYWxDb2RlIiwiYWN0aW9uIjoiY3JlYXRlIn1dLCJpYXQiOjE3MjMzNzg3OTYsImV4cCI6MTcyNDI0Mjc5NiwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIn0.Ko24itMrtoaOI_720w92OLWbTNSPFumXBWTX1poqycQ',
      'Content-Type': 'application/json',
    }
 }).then((response)=>
    {
        expect(response.status).to.eq(201);
        cy.log(response.body.message);
        cy.log(response.body.member_id);
        expect(response.body.data.member_id).to.eq(memberId);
    
        expect(response.body.message).to.eq("Interaction pushed successfully");
        expect(response.body.data.interaction_code).to.eq("IN_RAF_Referrer");
        


    })

    
});

})