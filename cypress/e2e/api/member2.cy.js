import { generateRandomString } from "../../support/utils/generateRandomString";
describe('Verify That Member should create by reading fixture file', ()=>{

    let token;
    beforeEach(() => {
        cy.log('testing started')
        
        cy.fixture('token.json').then((data)=>{
            token = data.access_token;
            cy.log(token)
        })
      });

      before(()=>{
        
      })
      
    it('Should Verify That Member is created Successfully.', ()=>{
        cy.fixture('member.json').then((member)=>{
            const memberId = member.member_id+generateRandomString(5); 
            const req_payload = {
                program_code: member.program_code,
                country_code: member.country_code,
                member_id: memberId,
                is_suspended: member.is_suspended,
                location_code: member.location_code,
                wallet_code:[{
                    code: member.wallet_code[0].code,
                }],
                variables:[{
                    name: member.variables[0].name,
                    value: member.variables[0].value

                },{
                    name: member.variables[1].name,
                    value: member.variables[1].value
                }]
            }
            const req_header = {
                "Authorization": 'Bearer '+token,
                "Content-Type": "application/json"
            }

            // cy.log(member.member_id);
            // cy.log(member.wallet_code.code);

            cy.request({
                method: 'POST',
                url: 'https://narbu-lms20-api-np.pampersrewards.com/api/members',
                body: req_payload,
                headers: req_header
            }).then((response)=>{
                expect(response.status).to.eq(201);
                cy.log('Endpoint Response Code Is: '+response.body.response_code);
                cy.log('Endpoint Message Is: '+response.body.message);

                if(response.body.response_code == '200'){
                    //cy.log(response.body.message);
                    //cy.log(response.body.data.member_id);
                    expect(response.body.message).to.eq('Member created successfully');
                    expect(response.body.data.member_id).to.eq(memberId);
                }
                
                
            })


        }) 
    })

    it('Should Give Error Message Program Code Not When Passing Empty Value In Program_Code Payload',()=>{
        cy.fixture('member.json').then((member)=>{
            const req_payload = {
                program_code: ' ',
                country_code: member.country_code,
                member_id: member.member_id+generateRandomString(5),
                is_suspended: member.is_suspended,
                location_code: member.location_code,
                wallet_code:[{
                    code: member.wallet_code[0].code,
                }],
                variables:[{
                    name: member.variables[0].name,
                    value: member.variables[0].value

                },{
                    name: member.variables[1].name,
                    value: member.variables[1].value
                }]
            }
            const req_header = {
                "Authorization": 'Bearer '+token,
                "Content-Type": "application/json"
            }

            // cy.log(member.member_id);
            // cy.log(member.wallet_code.code);

            cy.request({
                method: 'POST',
                url: 'https://narbu-lms20-api-np.pampersrewards.com/api/members',
                body: req_payload,
                headers: req_header
            }).then((response)=>{
                expect(response.status).to.eq(201);
                cy.log('Endpoint Response Code Is: '+response.body.response_code);
                cy.log('Endpoint Message Is: '+response.body.message);

                expect(response.body.response_code).to.eq(1300);
                expect(response.body.message).to.eq('Program Code Not Found')            
            })
        }) 

    })

    it('Should Give Error Message Member Id Already Exist When Passing Exiting member id  Value In Payload',()=>{

    })


})