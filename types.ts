// types.ts (or any suitable file)
export interface Member {
  id: number;
  name: string;
  job: string;
  avatar: string;
  option: string;
}

export interface Team {
  teamsName: string;
  members: Member[];
}

export interface Department {
  name: string;
  id: string;
  icon: string;
  route: string;
  teams: Team[];
}
export interface process {
  id: number;
  name: string;
  icon: string;
}
export interface project {
  id: string
  name: string
  project_des: string
  icon: string
  route: string
  processes: process[];
  departments: Department[];
}