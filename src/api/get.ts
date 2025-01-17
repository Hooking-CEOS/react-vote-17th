import { GET } from "../utils/axios";

export const onCheckPartResult = async (params: any, url: string) =>
  await GET(`/vote/candidate/${url}/`);

export const onCheckTeamResult = async (params: any) =>
  await GET(`/vote/team/`);
