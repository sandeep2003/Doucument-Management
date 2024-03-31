  export var config = {
    auth: {
      login: 'login',
      login_otp_based: 'login_otp',
      login_verify_otp_based: 'login_verify_otp',
      verify: 'verifyotp',
      logout: 'api/logout',
      // forgetPassword: {
      //   forgetEmail: 'forget',
      //   verifyLink: 'cheklinkstatus',
      //   changePassword: 'forgot/changePassword',
      //   resetPassword: 'forgot/resetPassword',
      //   verifyOtp: 'forgot/verifyOtp'
      // },

      // signup:{
      //   signup:'signup',
      //   resend:'resend_otp',
      //   verify:'verify_otp'
      // },
      getuser:'api/get_userlist',
      getpermission:'api/allpermissionlist',
      havepermission:'api/have_permission',
      Addpermission:'api/user_revokepermission',
      role_permission:'api/role_permission',
      add_role:'api/role_revokepermission',
      getrole:'api/getrolelist',
      getpermissionrole:'api/allpermissionlistbyrole'
    },
    // user: {
    //   register: 'api/register',
    //   user_list: 'api/allusers',
    //   corporatetype_list: 'api/getcorporate_type',
    //   edit_user: {
    //     patchUserData: 'api/getuserbyid',
    //     editUserData: 'api/edituser',
    //   },

    // },
    // role: {
    //   roleList: 'api/rolelist',
    //   role_creation: 'api/createrole',
    //   assign_Permissions: 'api/assignpermissionindex',
    //   create_role: 'api/permissionstore',
    //   edit_role:'api/getrolebyid',
    //   update_role:'api/updaterolebyid'
    // },

    // Permissions: {
    //   createPermissions: 'api/create_service_permission',
    //   updatepermission:'api/update_service_permission',
    //   getservicebyid:'api/get_service_by_id'


    // },
    // company: {
    //   getstatelist:'api/getStateList' ,
    //   service_request: 'api/service_list',
    //   service_request_list: 'api/servicerequestlist',
    //   sendService_request: 'api/servicerequest',
    //   staff_user_list: 'api/userlist',
    //   staff_Permission: 'api/userpermission',

    // },
    // admin: {
    //   requestlist: 'api/allrequest',
    //   approveService: 'api/approveservice',

    //   serviceList: 'api/getparentservice',
    //   approveServiceList: 'api/getapiservicedata',

    //   editservicelist: 'api/getservicebyid',
    //   createtemplate: 'api/dynamicform/create',
    //   edittemplate: 'api/dynamicform/update',
    //   listtemplate: 'api/dynamicform/list',
    //   deletetemplate: 'api/dynamicform/delete',
    //   readtemplate: 'api/dynamicform/read',
    //   templateservice: 'api/dynamicform/servicelist',
    //   bank_List:'api/bankList',
    //   add_account:'api/accountAdd',
    //   account_list:'api/accountList',
    //   user_search_list:'api/userSearch',
    //   updateStatus:'api/updateStatus',
    //   company:{
    //     transfer:'api/transfer',
    //     bank_list:'api/getList'
    //   }
    // },
    // workFlow: {
    //   workFlow_service_list: 'api/workflow/servicelist',
    //   workFlow_create: 'api/workflow/create',
    //   workFlow_create_steps: 'api/workflow/create_steps',
    //   assigneeList:'api/workflow/assignee_list',
    //   regerateToken:"api/workflow/regenerate_token",
    //   userlist:'api/workflow/userlist',
    //   assignUser:'api/workflow/assign_user',
    //   delete_workFlow: 'api/workflow/delete',
    //   duplicate:'api/workflow/copy',


    //   workFlow: 'api/workflow/update',
    //   workFlow_steps: 'api/workflow/update_steps',
    //   workFlow_list:'api/workflow/list',
    //   step_feilds: 'api/stepsfields',
    //   fieldsbysteps: 'api/fieldsbysteps',
    //   set_workFlow: 'api/set_workflow',

    //   customer_list: 'api/customerlist',
    //   assign_workFlow: 'api/assignedworkflow',
    //   upload_single_customer: 'api/create_customer',
    //   upload_bulk_customer: 'api/bulk_customer',
    //   re_generate: 'api/regenerateurl',
    //   getbyid_workflow:'api/workflow/read',
    // },
    // onboard:{
    //   addWorkflow:'api/add_workflow',
    //   add_api_workflow:'api/add_api_workflow',
    //   get_all_api_workflow:'api/get_all_api_workflow',
    //   add_customer:'api/add_customer',
    //   update_customer:'api/update_customer',
    //   list_customer:'api/list_customer',
    //   get_all_workflow:'api/get_all_workflow',
    //   get_all_customers:'api/get_all_customers',
    //   get_report:'api/get_report',
    //   get_customer_by_id:'api/get_customer_by_id',
    //   all_services:'api/workflow/all_services',
    //   get_workflow_by_id:'api/get_workflow_by_id',
    //   update_workflow:'api/update_workflow',
    //   authenticate:'authenticate',
    //   workflow_statement:'api/workflow_statement',
    //   workflow_statement_download:'api/workflow_statement_download',
    //   api:{
    //     aadhaar:'aadhaar_sendotp',
    //     aadhar_verifyotp: 'aadhaar_verifyotp',
    //     telecom_sendotp:'telecom_sendotp',
    //     telecom_verifyotp: 'telecom_verifyotp',
    //     pan_verify:'pan_verify',
    //     pandetails_verify:'pandetails_verify',
    //     gst_verify:'gst_verify',
    //     face_match:'face_match',
    //     licence_verify:'drivinglicense_verify',
    //     rc_verification:'rc_verify',
    //     udyam_aadhaar_verify:'udyam_aadhaar_verify',
    //     aadhaar_uan:'aadhaar_uan',
    //     bank_verify: 'bank_verify',
    //     ocr_doc: 'ocr_doc',
    //     uan_basic_v1:'api/uan_basic_v1',
    //     cibil_score: 'cibil_score',
    //     passport_verify: 'passport_verify',
    //     email: 'email_checker',
    //     mca_checker: 'mca_verify',
    //     tan_verify: 'tan_verify',
    //     fssai_check: 'fssai_check',
    //     rto_info: 'rto_info',
    //     card_validator: 'card_validator',
    //     name_to_cin: 'name_to_cin',
    //     chalan_info: 'chalan_info',
    //     mobile_to_pan: 'mobile_to_pan',
    //     mobile_to_upi: 'mobile_to_upi',
    //     mobile_operator:'api/mobile_operator',
    //     corporate_din: 'corporate/din',
    //     director_phone: 'corporate/director-phone',
    //     liveness_check:'liveness_check',
    //     ecredit_score:'ecredit_score'
    //   }
    // },
    // settings:{
    //   getCredentials:'api/getCredentials',
    //   generateCredentials:'api/generateCredentials',
    //   generateAuthrizekey:'api/createAuthorisedKey',
    //   getIp:'api/getIp',
    //   updateIp:'api/updateIp',
    //   removeIp:'api/removeIp',
    //   getCredentialsOtp:'api/getCredentialsOtp',
    //   update_callback_url:'api/update_callback_url',
    //   getCallBack:'api/get_callback_url',
    //   list_icon:'api/list_icon',
    //   add_icon:'api/add_icon',
    //   update_icon:'api/update_icon',
    //   delete_icon:'api/delete_icon'
    // },
    // report: {
    //   statement_Api: 'api/statementapi',
    //   invoice_system: 'api/invoice_system',
    //   invoice_list: 'api/invoice_list',
    //   singlestatementapi: 'api/singlestatementapi',
    //   statementapi:'api/statementdownload',
    //   downloadledger:'api/downloadledger',
    //   ledger: 'api/ledger',
    //   balanceHistory: 'api/balance_history',
    // },

    // validate_page: {
    //   imei_verification:'api/imei_verification',
    //   pan_comprehensive:'api/pan_comprehensive',
    //   epfo_without_otp: 'api/epfo_without_otp',
    //   mobile_operator:'api/mobile_operator',
    //   card_validator:'api/card_validator',
    //   fastag:'api/fast_tag_info',
    //   fuel_price:'api/fuel_price',
    //   pincode:'api/pincode_info',
    //   rto_info:'api/rto_info',
    //   ckyc_download:'api/ckyc_download',
    //   penny_drop: 'api/penny_drop',
    //   penny_drop_v2 : 'api/penny_drop_v2 ',
    //   pennyless_v3 : 'api/bank_verify_pennyless_v3 ',
    //   bank_verify_v2 : 'api/bank_verify_v2 ',
    //   ckyc_search:'api/ckyc_search',
    //   bank_verify: 'api/bank_verify',
    //   cibil: 'api/cibil_score',
    //   cibil_e_credits: 'api/ecredit_score',
    //   aadhar_sendotp: 'api/aadhaar_sendotp',
    //   aadhar_verifyotp: 'api/aadhaar_verifyotp',
    //   voter_verify: 'api/voter_verify',
    //   ocr_extraction: 'api/ocr_doc',
    //   itr_check:'api/itr_check',
    //   aadhaar_without_otp:'api/aadhaar_without_otp',
    //   itr_ack:'api/itr_ack',
    //   ip_geo_lookup:'api/ip_geo_lookup',
    //   face_match:'api/face_match',
    //   pan_extraction: 'api/ocr_doc',
    //   namefrom: 'api/name_match_types',
    //   namematch: 'api/name_match',
    //   documentverify: 'api/document_verify',
    //   forgeryapi: 'api/forgery_detection',
    //   gettypeapi: 'api/forgerytype',
    //   email_verify: 'api/email_checker',
    //   aadhar_msk: 'api/aadhaar_masking',
    //   atmslip_ext: 'api/atmslip_ocr',
    //   speech_ext: 'api/speech_to_text',
    //   pan_verify:'api/pan_verify',
    //   mobile_to_pan:'api/mobile_to_pan',
    //   pan_details:'api/pandetails_verify',
    //   licence_verify:'api/drivinglicense_verify',
    //   telecom_verifyotp:'api/telecom_verifyotp',
    //   telecom_sendotp:'api/telecom_sendotp',
    //   udyam_aadhar:'api/udyam_aadhaar_verify',
    //   aadhaar_uan:'api/aadhaar_uan',
    //   mobile_to_upi:'api/mobile_to_upi',
    //   corporate_din:'api/corporate/din',
    //   director_phone:'api/corporate/director-phone',
    //   whatsapp_check:'api/whatsapp_checker',
    //   lei_verification:'api/lei_verify',
    //   tan_verification:'api/tan_verify',
    //   mca_verification:'api/mca_verify',
    //   pan_to_gst_verification:'api/pan_to_gst',
    //   reverse_geocode:'api/reverse_geocode',
    //   c_name_to_cin_verification:'api/name_to_cin',
    //   fssai_verification:'api/fssai_check',
    //   shpestblmnt_verification:'api/shop_establishment',
    //   iec_verification:'api/iec_verify',
    //   upi_verification:'api/upi_verify',
    //   credit_report:'api/credit_report_checker',
    //   epfo_sendotp:'api/sendOtp',
    //   epfo_verifyotp:'api/VerifyOtp',
    //   epfo_epfoKycFetch:'api/epfo_kyc_fetch',
    //   uan_basic_v1:'api/uan_basic_v1',
    //   uan_basic_v2:'api/uan_basic_v2',
    //   epfo_epfopassbookdownload:'api/epfo_passbook_download',
    //   epfo_getdetails:'api/getepfokycdetail',
    //   passbook_deatils:'api/getpassbookdetail',
    //   gst_verify:'api/gst_verify',
    //   advanced_gst:'api/advanced_gst',
    //   court_case_check:'api/court_case_check',
    //   liveness_check:'api/liveness_check',
    //   aadhaar_qr_check:'api/aadhaar_qr_check',
    //   chalan_info:'api/chalan_info',
    //   vpn_proxy:'api/vpn_proxy',
    //   ifsc_lookup:'api/ifsc_lookup',
    //   pincode_info:'api/pincode_info',
    //   stock_price:'api/stock_price',
    //   currency_exchange:'api/currency_exchange',
    //   pennyDrop:'api/penny_drop',
    //   bank_verify_pennyless:'api/bank_verify_pennyless ',
    //   itr_detail:{
    //     itr_create_client:'api/itr_create_client',
    //     itr_forget_password:'api/itr_forget_password',
    //     itr_submit_otp:'api/itr_submit_otp',
    //   },



    //   itr_download:'api/itr_list',
    //   itr_dtl:'api/get_itr',
    //   get_tds_list:'api/26as_list',
    //   get_tds_detail:'api/get_26as',
    //   company_to_tan: 'api/company_to_tan',


    // },
    // dashboard: {
    //   dashboard_api: 'api/dashboard',
    //   pie_chart: 'api/piechart',
    //   graph_chart: 'api/graph_chart',
    //   most_utilized_api: 'api/most_utilized_api',
    // },
    // permissionList: {
    //   list: 'api/permission_tree',
    //   getService: 'api/getparentservice',
    //   allServices: 'api/getallservices',
    // },

    header: {
      getbalance: 'api/getbalance',
      search_api: 'api/search_api',
    },
    // bank_bulk_verify: {
    //   upload: 'api/bank_upload_bulk',
    //   list: 'api/bank_task_list ',
    // },
    // bulk_upload:{
    //   bulk_upload_aadhar_masking:'api/bulk_upload_aadhar_masking',
    //   bulk_upload_gst:'api/bulk_upload_gst',
    //   bulk_upload_account:'api/bulk_upload_account',
    //   bulk_upload_rc:'api/bulk_upload_rc',
    //   bulk_upload_dl:'api/bulk_upload_dl',
    //   bulk_upload_pan:'api/bulk_upload_pan',
    //   bulk_upload_pan_detail:'api/bulk_upload_pan_detail',
    //   bulk_upload_pan_comp:'api/bulk_upload_pan_comp',
    //   bulk_upload_list:'api/bulk_upload_list',
    //   bulk_upload_download:'api/bulk_upload_download'
    // },
    // reportsection: {
    //   allServices: 'api/getallservice',
    // },
    sidemenu_live_sandbox: {
      live: 'api/sidemenu_live_sandbox',
      createva:'api/createVa'
    },

    // verifyphone: {
    //   otp: 'api/mobile_verifyotp',
    //   checkerphone: 'api/mobile_sendotp',
    // },
    config: {
      createLogo:'api/createLogo',
      getDetaills: 'api/getlogo',
      getDefaultColor:'getDomain'
    },


    // verification:{
    //   rc_verification:'api/rc_verify',
    //   passport:'api/passport_verify',
    // },
    // application_review:{
    //   list:"api/workflow-application/list",
    //   view:"api/workflow-application/read"
    // },
    // Companybanklist: {
    //   url: 'api/fund-request/banklist',
    // },
    // User Create Fund request starts
    // createUserfundrequest: {
    //   url: 'api/user/fund-request',
    //   is_loader: 'true',
    // },
    // getUserfundrequest: {
    //   url: 'api/user/fund-request/requestdata',
    // },
    // corpApproveUserReq: {
    //   url: 'api/user/fund-request/approvereq',
    // },
  //  User Create Fund request ends

    // mannualFundDebit:{
    //   url:'api/manual_debit_fund'
    // },
    // createfundrequest: {
    //   url: 'api/fund-request',
    //   is_loader: 'true',
    // },

    // getfundrequest: {
    //   url: 'api/fund-request/requestdata',


    // },

    // getAllList: {
    //   url: 'api/fund-request/getlist',
    //   download: 'api/fund-request/getlistdownload',
    // },

    // statusChange: {
    //   url: 'api/fund-request/statusupdate',
    // },
    // balanceUpdate: {
    //   url: 'api/fund-request/balanceupdate',
    // },

    // getPendingAprLst: {
    //   url: 'api/approver/pendingrequest',
    // },
    // getPendingApvr: {
    //   url: 'api/approver/getpendingrequest',
    // },
    // pendingApproverApprove :{
    //   url: 'api/approver/approvalrequest',

    // },
    // pendingapproverReject: {
    //   url: 'api/approver/rejectrequest',
    // },

    // getPendingAuthLst: {
    //   url: 'api/authorise/pendingrequest',
    // },

    // getPendingAuthrequest: {
    //   url: 'api/authorise/getpendingrequest',
    // },

    // pendingauthoReject: {
    //   url: 'api/authorise/reject',
    // },


    // AuthorizeApproveRequest: {
    //   url: 'api/authorise/approve_request',
    // },
    // addFundtoadmin: {
    //   url: 'api/fund-request/addFundToVault',
    // },
    // addcompanybank: {
    //   url: 'api/addBank',
    // },
    // getcompanybankList: {
    //   url: 'api/getList',
    // },
    // getcompanyBank: {
    //   url: 'api/getBank',
    // },
    // updateBankInfo: {
    //   url: 'api/updateBank',
    // },
    // companyBankStatement: {
    //   url: 'api/companyBankStatement',
    // },
    //

    // kyc:{
    //   basicDetails: 'api/basicDetail',
    //   entityType: 'api/entityType',
    //   bankType: 'api/mbanks',
    //   ifscType: 'api/getIfsc',
    //   // getVa:'api/getVa',
    //   pennydrop: 'api/pennydrop',
    //   // panVerify: 'api/panverify',
    //   panVerify:'api/onboard_pan_verify',
    //   aadhaarSendOtp : 'api/onboard_aadhaar_sendotp',
    //   aadhaarVerifyOtp: 'api/onboard_aadhaar_verifyotp',
    //   upadateData: 'api/updateData',
    //   allKycDetails: 'api/allKycDetails',
    //   adminApprove:'api/docApprove',

    // },

    // location: {
    //   stateData: 'api/getAllState',
    //   cityData: 'api/getAllCity'
    // },

    // complaints Api RAise ticket
    // complaints:{
    //   getAllServices:'api/ticket/get_all_services',
    //   getAllTickets:'api/ticket/get_all_tickets',
    //   assign_to:'api/ticket/support_user_list',
    //   getAllCorporate:'api/ticket/get_all_corporate',
    //   reopenTicket:'api/ticket/reopen_ticket',
    //   closeTicket:'api/ticket/close_ticket',
    //   holdTicket:'api/ticket/hold_ticket',
    //   assignTicket:'api/ticket/assign_ticket',
    //   raiseTicket:'api/ticket/raise_ticket',
    //   chat:'api/chat/mssg_by_ticket ',
    //   send_message:'api/chat/send_message',
    //   ticket_detail:'api/ticket/ticket_detail',
    //   download_tickets:'api/ticket/download_tickets',

    // },
    // Support User api
    // supportUser:{
    //   supportUsersList:'api/support/user_list',
    //   create_support_user:'api/support/create_support_user',
    //   support_user_list:'api/ticket/support_user_list',
    //   user_status:'api/support/user_status',

    // },
    // digilocker:{
    //   initiate_session:'api/digilocker/initiate_session',
    //   revoke_token:'api/digilocker/revoke_token',
    //   access_token:'api/digilocker/access_token',
    //   eaadhaar:'api/digilocker/eaadhaar',
    //   issued_files:'api/digilocker/issued_files',
    //   download_pdf:'api/digilocker/download_pdf',
    //   download_xml:'api/digilocker/download_xml',
    // },
  // credit Report
  // creditReport:{
  //   experian_CIR:'api/credit-report/experian-CIR',
  //   experian_SM:'api/credit-report/experian-SM',
  //   equifax_CCR:'api/credit-report/equifax-CCR',
  //   equifax_IDCCR:'api/credit-report/equifax-IDCCR',
  //   transaunion:'api/credit-report/transaunion',
  //   getState:'api/credit-report/get_pincode',
  // },

    // tokenauth: 'e090c25187ee2b3f9f1f8a02747356641',
    // Authkey: 'MWQyMmUzNWY4YjhlNjY2NWJjM2EzZjY0NjNhZWM0ZTk=',
  };
