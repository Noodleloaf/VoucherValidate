﻿
WAF.onAfterInit = function onAfterInit() {// @lock

// @region namespaceDeclaration// @startlock
	var login1 = {};	// @login
	var vbNewUser = {};	// @button
// @endregion// @endlock

// eventHandlers// @lock

	login1.logout = function login1_logout (event)// @startlock
	{// @endlock
		setObjVisibility();
	};// @lock

	login1.login = function login1_login (event)// @startlock
	{// @endlock
		setObjVisibility();
	};// @lock
	
	setObjVisibility();

	function setObjVisibility() {
		if (WAF.directory.currentUserBelongsTo('Admin')) {
           $$('body').show();
       	} else {
           $$('body').hide();
       	}       	
       	
	}

	
	vbNewUser.click = function vbNewUser_click (event)// @startlock
	{// @endlock
		if(newUserName!='')
		{
			newUser = ds.User.createUser(newUserName);
			sources.user.addEntity(newUser);
			sources.user.collectionRefresh(); 
                // put the current entity in the datasource's entity collection
        }
	};// @lock

// @region eventManager// @startlock
	WAF.addListener("login1", "logout", login1.logout, "WAF");
	WAF.addListener("login1", "login", login1.login, "WAF");
	WAF.addListener("vbNewUser", "click", vbNewUser.click, "WAF");
// @endregion
};// @endlock
