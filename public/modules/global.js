'use strict';

var EMAIL = 'email';
var USER_ID = 'userId';
var FIRSTNAME = 'firstname';
var LASTNAME = 'lastname';
var KIND = 'kind';
var AUTH_TOKEN = 'auth_token';
var PROVIDER = 'provider';
var SUBSCRIPTION = 'subscription';
var TEMP_SUBSCRIPTION = 'tempSubscription';
var AVATAR = 'avatar';
var WIZARD_DATA = 'wizardData';
var POSTS = 'posts';

var SEARCH_INPUT_EVENT = 'showSearchInput';
var USER_LOGGED_IN_EVENT = 'userLoggedIn';
var SESSION_TIMEOUT_EVENT = 'sessionTimeout';
var CHECK_USER_STATUS_EVENT = 'checkUserStatus';
var ERROR_MESSAGE_EVENT = 'setErrorMessage';
var FLASH_MESSAGE_EVENT = 'showFlashMessage';
var REFRESH_MESSAGES_EVENT = 'refreshMessages';
var AVATAR_CHANGED_EVENT = 'avatarChanged';

var SUBSCRIPTION_FREE = 'free';
var SUBSCRIPTION_STARTER = 'starter';
var SUBSCRIPTION_PREMIUM = 'premium';

var USER = 'user';
var CUSTOMER = 'customer';

function getSubscriptionNameForId(subscriptionId) {
    switch (subscriptionId) {
        case SUBSCRIPTION_FREE:
            return "Kostenlos";
        case SUBSCRIPTION_STARTER:
            return "Einsteiger";
        case SUBSCRIPTION_PREMIUM:
            return "Premium";
    }
}