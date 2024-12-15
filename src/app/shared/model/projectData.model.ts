

export interface IProjectData {
  code?: string,
  title?: string,
  client?: string,
  date?: string,
  projectLink?: string
  description?: string,
  projectType?: string,
  images?: any,
  team?: string,
}

export class ProjectData implements IProjectData {
  constructor(
    public code?: string,
    public title?: string,
    public client?: string,
    public date?: string,
    public projectLink?: string,
    public description?: string,
    public projectType?: string,
    public images?: any,
    public team?: string
  ) { }
}
