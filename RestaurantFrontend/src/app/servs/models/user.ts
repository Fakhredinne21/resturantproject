/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Role } from '../models/role';
export interface User {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email?: string;
  enabled?: boolean;
  firstName?: string;
  lastModifiedDate?: string;
  lastName?: string;
  name?: string;
  password?: string;
  roles?: Array<Role>;
  subscribed?: boolean;
  userId?: number;
  username?: string;
}
