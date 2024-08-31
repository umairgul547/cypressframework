// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('createMember', (memberId) => {
    const baseUrl = "https://narbu-lms20-api-np.pampersrewards.com/api/members";
    const payLoad = {
        "program_code": "IN",
        "country_code": "IN",
        "member_id": memberId,
        "is_suspended": false,
        "location_code": "Mobile_IN",
        "wallet_code": [{"code": "default_wallet"}]
    };

    return cy.request({
        method: 'POST',
        url: baseUrl,
        body: payLoad,
        headers: {
            'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwZXJtaXNzaW9ucyI6W3sibW9kdWxlIjoiTWVtYmVycyIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiTWVtYmVycyIsImFjdGlvbiI6InVwZGF0ZSJ9LHsibW9kdWxlIjoiTWVtYmVySW50ZXJhY3Rpb25zIiwiYWN0aW9uIjoidXBkYXRlIn0seyJtb2R1bGUiOiJNZW1iZXJzIiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiTWVtYmVyVmFyaWFibGVzIiwiYWN0aW9uIjoiY3JlYXRlIn0seyJtb2R1bGUiOiJJZGVudGlmaWVycyIsImFjdGlvbiI6InJlYWQifSx7Im1vZHVsZSI6IlJlZGVtcHRpb24iLCJhY3Rpb24iOiJjcmVhdGUifSx7Im1vZHVsZSI6IlJlZGVtcHRpb24iLCJhY3Rpb24iOiJ1cGRhdGUifSx7Im1vZHVsZSI6IkZ1bGZpbGxtZW50IiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiTWVtYmVyTWlsZXN0b25lIiwiYWN0aW9uIjoiY3JlYXRlIn0seyJtb2R1bGUiOiJFdmVudCIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25IaXN0b3J5IiwiYWN0aW9uIjoicmVhZCJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25CeVJlZmVyZW5jZSIsImFjdGlvbiI6InJlYWQifSx7Im1vZHVsZSI6IlJlZmVycmFsQ29kZSIsImFjdGlvbiI6InVwZGF0ZSJ9LHsibW9kdWxlIjoiVHJhbnNhY3Rpb25Qcm9kdWN0cyIsImFjdGlvbiI6ImNyZWF0ZSJ9LHsibW9kdWxlIjoiUmVmZXJyYWxDb2RlIiwiYWN0aW9uIjoiY3JlYXRlIn1dLCJpYXQiOjE3MjQyNDY2NjksImV4cCI6MTcyNTExMDY2OSwiYXVkIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDo4MDgwIn0.Bjotg-sb7WBjWA6hjHsB0cm8_Jv1EYYHrB_mSazNIIQ',
            'Content-Type': 'application/json',
        }    
    }).then((response) => {
        expect(response.status).to.eq(201);
        expect(response.body.message).to.eq('Member created successfully');
        expect(response.body.data.member_id).to.eq(memberId);
        return response.body.data;
    });
});