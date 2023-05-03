import { 
	SettingHttpModule,
	SettingHttpTcpModule,
	SettingTcpModule, 
} from './api/setting';
import { 
	AccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule, 
	AccessAccessOptionTcpModule, 
} from './api/access-access-option';
import { 
	AccessOptionHttpModule,
	AccessOptionHttpTcpModule, 
	AccessOptionTcpModule, 
} from './api/access-option';
import { 
	AccessStatusHttpModule,
	AccessStatusHttpTcpModule,
	AccessStatusTcpModule, 
} from './api/access-status';
import { 
	AccessHttpModule,
	AccessHttpTcpModule,
	AccessTcpModule, 
} from './api/access';
import { 
	RoleAccessHttpModule,
	RoleAccessHttpTcpModule, 
	RoleAccessTcpModule, 
} from './api/role-access';

const Http = {
	AccessAccessOptionHttpModule,
	AccessOptionHttpModule,
	AccessStatusHttpModule,
	AccessHttpModule,
	RoleAccessHttpModule,
	SettingHttpModule,
};
const HttpTcp = {
	AccessAccessOptionHttpTcpModule,
	AccessOptionHttpTcpModule,
	AccessStatusHttpTcpModule,
	AccessHttpTcpModule,
	RoleAccessHttpTcpModule,
	SettingHttpTcpModule,
};
const Tcp = {
	AccessAccessOptionTcpModule,
	AccessOptionTcpModule,
	AccessStatusTcpModule,
	AccessTcpModule,
	RoleAccessTcpModule,
	SettingTcpModule,
};

export {
	Http,
	Tcp,
	AccessAccessOptionTcpModule,
	AccessAccessOptionHttpModule,
	AccessAccessOptionHttpTcpModule,
	AccessOptionTcpModule,
	AccessOptionHttpModule,
	AccessOptionHttpTcpModule,
	AccessStatusTcpModule,
	AccessStatusHttpModule,
	AccessStatusHttpTcpModule,
	AccessHttpModule,
	AccessHttpTcpModule,
	AccessTcpModule,
	RoleAccessTcpModule,
	RoleAccessHttpModule,
	RoleAccessHttpTcpModule,
	SettingHttpModule,
	SettingHttpTcpModule,
	SettingTcpModule,
};
