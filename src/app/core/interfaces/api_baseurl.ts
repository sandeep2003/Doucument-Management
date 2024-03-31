  export var config = {
    auth: {
      login: 'login',
      login_otp_based: 'login_otp',
      login_verify_otp_based: 'login_verify_otp',
      verify: 'verifyotp',
      logout: 'api/logout',
      getuser:'api/get_userlist',
      getpermission:'api/allpermissionlist',
      havepermission:'api/have_permission',
      Addpermission:'api/user_revokepermission',
      role_permission:'api/role_permission',
      add_role:'api/role_revokepermission',
      getrole:'api/getrolelist',
      getpermissionrole:'api/allpermissionlistbyrole'
    },
    // header: {
    //   getbalance: 'api/getbalance',
    //   search_api: 'api/search_api',
    // },
    sidemenu_live_sandbox: {
      live: 'api/sidemenu_live_sandbox',
      createva:'api/createVa'
    },
    config: {
      createLogo:'api/createLogo',
      getDetaills: 'api/getlogo',
      getDefaultColor:'getDomain'
    },

  };
