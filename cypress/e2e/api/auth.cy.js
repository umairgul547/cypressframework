it('Get Access Token', ()=>{
    const req_payload = {
        "permissions": [
            {
                "module": "Members",
                "action": "create"
            },
            {
                "module": "Members",
                "action": "update"
            },
            {
                "module": "MemberInteractions",
                "action": "update"
            },
            {
                "module": "Members",
                "action": "read"
            },
            {
                "module": "MemberVariables",
                "action": "create"
            },
            {
                "module": "Identifiers",
                "action": "read"
            },
            {
                "module": "Redemption",
                "action": "create"
            },
            {
                "module": "Redemption",
                "action": "update"
            },
            {
                "module": "Fulfillment",
                "action": "read"
            },
            {
                "module": "MemberMilestone",
                "action": "create"
            },
            {
                "module": "Event",
                "action": "create"
            },
            {
                "module": "TransactionHistory",
                "action": "read"
            },
            {
                "module": "TransactionByReference",
                "action": "read"
            },
            {
                "module": "ReferralCode",
                "action": "update"
            },
            {
                "module": "TransactionProducts",
                "action": "create"
            },
            {
                "module": "ReferralCode",
                "action": "create"
            }
        ]
    }

    const req_header = {
        "signature": "AMFAdysJk+PMRldSV3iDZ/tH7eNfXps9LdzJaHKAZ/Q="
    }

    const url = 'https://narbu-lms20-api-np.pampersrewards.com/api/auth/token';

    cy.request({
        method: 'POST',
        url: url, // Replace with your API endpoint
        headers: req_header, 
        body: req_payload
    }).then((response)=>{
        const token = response.body.access_token;
      
      // Save the token to a fixture file save in json formate.
       cy.writeFile('cypress/fixtures/token.json', { access_token: token });
    })

})