/// <reference types="cypress" />

import { generateRandomString } from "../../support/utils/generateRandomString";
describe("earn api for scanning a code ",()=> {
    let promotionCode = ["code_1","code_2","code_3"]
    let LoyaltyId = "scan "+generateRandomString(4);
    let member_id ;
    it("create memeber for scannig",()=> {
        cy.createMember(LoyaltyId).then((memberData)=> {
           cy.log("member create via api" + memberData.member_id);
           member_id = memberData.member_id;
        })
    })
    
    it("scan a code ",()=> {
        const baseUrl ="https://narbu-lms20-api-np.pampersrewards.com/api/earn";

        for(let i = 0; i < 3; i++){
            const payLoad = {
                "program_code": "IN",
                "location_code": "Mobile_IN",
                "earn_type": "Transaction",
                "member_id":member_id,
                "wallet_code": "default_wallet",
                "code": promotionCode[i]
            }

            cy.request(
                { method :"POST",
                    url : baseUrl,
                    body :payLoad,
                headers :  
                {
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6W3sibW9kdWxlIjoiTWVtYmVycyIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiTWVtYmVycyIsImFjdGlvbiI6InVwZGF0ZSJ9LHsibW9kdWxlIjoiTWVtYmVySW50ZXJhY3Rpb25zIiwiYWN0aW9uIjoidXBkYXRlIn0seyJtb2R1bGUiOiJNZW1iZXJzIiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiTWVtYmVyVmFyaWFibGVzIiwiYWN0aW9uIjoiY3JlYXRlIn0seyJtb2R1bGUiOiJJZGVudGlmaWVycyIsImFjdGlvbiI6InJlYWQifSx7Im1vZHVsZSI6IlJlZGVtcHRpb24iLCJhY3Rpb24iOiJjcmVhdGUifSx7Im1vZHVsZSI6IlJlZGVtcHRpb24iLCJhY3Rpb24iOiJ1cGRhdGUifSx7Im1vZHVsZSI6IkZ1bGZpbGxtZW50IiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiTWVtYmVyTWlsZXN0b25lIiwiYWN0aW9uIjoiY3JlYXRlIn0seyJtb2R1bGUiOiJFdmVudCIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25IaXN0b3J5IiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25CeVJlZmVyZW5jZSIsImFjdGlvbiI6InJlYWQifSx7Im1vZHVsZSI6IlJlZmVycmFsQ29kZSIsImFjdGlvbiI6InVwZGF0ZSJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25Qcm9kdWN0cyIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiUmVmZXJyYWxDb2RlIiwiYWN0aW9uIjoiY3JlYXRlIn1dLCJpYXQiOjE3MjQyNDc0MjgsImV4cCI6MTcyNTExMTQyOCwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIn0.QvxHJJnUGX4nF0bHRPNGrLrrePQ6_Ly1T6cSXrq8YM0',
                  'Content-Type': 'application/json',
                }
            }).then ((response)=>
                {
                    expect(response.status).to.equal(201);
                    cy.log(response.body.message);
                    cy.log(response.body.member_id);
                    expect(response.body.message).to.eq("Scan completed successfully");
                    if(i.eq(0)){
                        //  Scan code 1
                    }

                    if(i.eq(1)){
                        //  Scan code 2
                    }

                    if(i.eq(2)){
                        //  Scan code 3
                    }

                    expect(response.body.data.code_type).to.eq("Product_Code");
                    expect(response.body.data.location_code).to.eq("Mobile_IN");
                    expect(response.body.data.wallet_code).to.eq("default_wallet");
                }
            )
        }
        
        
    })
    



})