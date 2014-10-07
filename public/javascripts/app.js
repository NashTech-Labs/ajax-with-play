$(function() {

	renderAjaxOne();
	renderAjaxTwo();
	ajaxCall();

	var testAjax = jsRoutes.controllers.Application.ajaxCall();
	$.ajax({
		url : testAjax.url
	}).done(function() {
		$("body").append("<br/>");
		$("body").append("done");
	}).fail(function() {
		$("body").append("<br/>");
		$("body").append("fail");
	});

});

var ajaxSuccess = function(action, data) {
	$("body").append("<br/>");
	$("body").append(action + " " + data);
};

var ajaxError = function(action, error) {
	alert(action + " : " +error);
}

var renderAjaxOne = function() {
	var ajaxCallBack = {
		success : function(data) {
			ajaxSuccess("AJAX 1:", data);
		},
		error : function(error) {
			ajaxError("AJAX 1:", error);
		}
	}

	jsRoutes.controllers.Application.ajaxCall().ajax(ajaxCallBack);
};

var renderAjaxTwo = function() {
	var ajaxCallBack = {
		success : function(data) {
			ajaxSuccess("AJAX 2:", data);
		},
		error : function(error) {
			ajaxError("AJAX 2:", error);
		}
	}

	jsRoutes.controllers.Application.ajaxCall().ajax(ajaxCallBack);
};

var ajaxCall = function() {
	var ajaxCallBack = {
		success : onSuccess,
		error : onError
	}

	jsRoutes.controllers.Application.ajaxCall().ajax(ajaxCallBack);
};

var onSuccess = function(data) {
	alert(data);
}

var onError = function(error) {
	alert(error);
}
