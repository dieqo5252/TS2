global.VERSION = 90359;
global.WORKER_SIZE = 256;

global.LOGIN_IP = '127.0.0.1';
global.LOGIN_PO = 11091;
global.MAX_USER_FOR_LOGIN = 1000;

global.ZONE_IP = '127.0.0.1';
global.ZONE_PO = 20001;
global.MAX_USER_FOR_ZONE = 1000;

global.MY_HOST = '127.0.0.1';				//your mysql host
global.MY_PORT = 3306;						//your mysql port
global.MY_USER = 'root';					//your mysql user
global.MY_PASS = 'dos';						//your mysql password
global.MY_DB = 'game';						//your mysql database
global.MY_TB01 = 'DefineMaxUserNum';		//mysql table
global.MY_TB02 = 'MemberInfo';				//mysql table
global.MY_TB03 = 'AvatarInfo';				//mysql table
global.MY_TB04 = 'MasterInfo';				//mysql table

global.MAX_USER_ID_LENGTH 				=	101;
global.MAX_USER_PASSWORD_LENGTH			=	101;
global.MAX_MOUSE_PASSWORD_LENGTH		=	5;

global.MAX_USER_AVATAR_NUM				=	3;
global.MAX_AVATAR_NAME_LENGTH			=	13;
global.MAX_EQUIP_SLOT_NUM				=	13;
global.MAX_GUILD_NAME_LENGTH			=	13;
global.MAX_CALL_NAME_LENGTH				=	5;
global.MAX_PARTY_AVATAR_NUM				=	5;
global.MAX_STORE_ITEM_SLOT_NUM			=	28;
global.MAX_SAVE_ITEM_SLOT_NUM			=	28;
global.MAX_SKILL_SLOT_NUM				=	40;
global.MAX_INVENTORY_SLOT_NUM			=	64;
global.MAX_TRADE_SLOT_NUM				=	8;
global.MAX_HOT_KEY_NUM					=	14;
global.MAX_FRIEND_NUM					=	10;


global.MAX_AVATAR_EFFECT_SORT_NUM		=	29;
global.SIZE_OF_AVATAR_INFO				=	7896;
global.SIZE_OF_ACTION_INFO				=	72;
global.SIZE_OF_OBJECT_FOR_AVATAR		=	556;
//CLIENT -> LOGIN;
global.P_LOGIN_SEND						=	11;
global.S_LOGIN_SEND						=	13 + MAX_USER_ID_LENGTH + MAX_USER_PASSWORD_LENGTH;
global.P_CLIENT_OK_FOR_LOGIN_SEND		=	12;
global.S_CLIENT_OK_FOR_LOGIN_SEND		=	9;
global.P_CREATE_MOUSE_PASSWORD_SEND		=	13;
global.S_CREATE_MOUSE_PASSWORD_SEND		=	9 + MAX_MOUSE_PASSWORD_LENGTH;
global.P_CHANGE_MOUSE_PASSWORD_SEND		=	14;
global.S_CHANGE_MOUSE_PASSWORD_SEND		=	9 + MAX_MOUSE_PASSWORD_LENGTH + MAX_MOUSE_PASSWORD_LENGTH;
global.P_LOGIN_MOUSE_PASSWORD_SEND		=	15;
global.S_LOGIN_MOUSE_PASSWORD_SEND		=	9 + MAX_MOUSE_PASSWORD_LENGTH;
global.P_CREATE_AVATAR_SEND 			=	17;
global.S_CREATE_AVATAR_SEND				=	13 + SIZE_OF_AVATAR_INFO;
global.P_DELETE_AVATAR_SEND				=	18;
global.S_DELETE_AVATAR_SEND				=	21;
global.P_DEMAND_ZONE_SERVER_INFO_1_SEND	=	22;
global.S_DEMAND_ZONE_SERVER_INFO_1_SEND	=	13;
global.P_FAIL_MOVE_ZONE_1_SEND			=	23;
global.S_FAIL_MOVE_ZONE_1_SEND			=	9;

//LOGIN -> CLIENT;
global.P_LOGIN_RECV						=	11;
global.S_LOGIN_RECV						=	339;
global.P_USER_AVATAR_INFO				=	12;
global.S_USER_AVATAR_INFO				=	1 + SIZE_OF_AVATAR_INFO;
global.P_CREATE_MOUSE_PASSWORD_RECV		=	13;
global.S_CREATE_MOUSE_PASSWORD_RECV		=	5 + MAX_MOUSE_PASSWORD_LENGTH;
global.P_CHANGE_MOUSE_PASSWORD_RECV		=	14;
global.S_CHANGE_MOUSE_PASSWORD_RECV		=	5 + MAX_MOUSE_PASSWORD_LENGTH;
global.P_LOGIN_MOUSE_PASSWORD_RECV		=	15;
global.S_LOGIN_MOUSE_PASSWORD_RECV		=	5;
global.P_CREATE_AVATAR_RECV				=	17
global.S_CREATE_AVATAR_RECV				=	5 + SIZE_OF_AVATAR_INFO;
global.P_DELETE_AVATAR_RECV				=	18;
global.S_DELETE_AVATAR_RECV				=	5;
global.P_DEMAND_ZONE_SERVER_INFO_1_RECV	=	22;
global.S_DEMAND_ZONE_SERVER_INFO_1_RECV	=	29;
global.P_RECOMMAND_WORLD_SEND			=	24;
global.S_RECOMMAND_WORLD_SEND			=	13;



//CLIENT -> ZONE
global.P_TEMP_REGISTER_SEND				=	11;
global.S_TEMP_REGISTER_SEND				=	13 + MAX_USER_ID_LENGTH;
global.P_REGISTER_AVATAR_SEND			=	12;
global.S_REGISTER_AVATAR_SEND			=	9 + MAX_USER_ID_LENGTH + MAX_AVATAR_NAME_LENGTH + SIZE_OF_ACTION_INFO;

//ZONE -> CLIENT
global.P_TEMP_REGISTER_RECV				=	11;
global.S_TEMP_REGISTER_RECV				=	5;
global.P_REGISTER_AVATAR_RECV			=	12;
global.S_REGISTER_AVATAR_RECV			=	1 + SIZE_OF_AVATAR_INFO + ( MAX_AVATAR_EFFECT_SORT_NUM * 8 );
global.P_AVATAR_ACTION_RECV				=	15;
global.S_AVATAR_ACTION_RECV				=	13 + SIZE_OF_OBJECT_FOR_AVATAR;



module.exports = global;