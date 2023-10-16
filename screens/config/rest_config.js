import {exp} from 'react-native-reanimated';

//Notification API
export const articles_url = 'http://newsapi.org/v2/top-headlines';
export const country_code = 'in';
export const category = 'general';
export const _api_key = '6e4b5b41f992475bab71e5dde33d8ad9';

//Login api with the token used
export const login_ur = 'http://api.moe.bt/auth_api/v1/';

//Repository management api
export const BLCrepo_url   ='http://rep.moe.bt/repository_api/v1/getrepodetails/1';
export const PLCrepo_url   = 'http://rep.moe.bt/repository_api/v1/getrepodetails/2';
export const ALCrepo_url   ='http://rep.moe.bt/repository_api/v1/getrepodetails/3';
export const DDCrepo_url   ='http://rep.moe.bt/repository_api/v1/getrepodetails/4';
export const SRrepo_url    ='http://rep.moe.bt/repository_api/v1/getrepodetails/5';
export const AVMrepo_url   = 'http://rep.moe.bt/repository_api/v1/getrepodetails/6';
export const RECrepo_url   ='http://rep.moe.bt/repository_api/v1/getrepodetails/7';
export const PUBrepo_url   ='http://rep.moe.bt/repository_api/v1/getrepodetails/8';

//centerDetails map  api with user Role
export const centreDetails_url  ='pos';
 
//instructor details based on user role
export const instructor_url   ='http://ins.moe.bt/instructor_api/v1/getinstructorprofile/';

//Edit Instructor Profile
export const instructorprofileUpdate_url ='http://ins.moe.bt/instructor_api/v1/instructorprofile/';

//LeanerDetails in attendance based on user role
export const Learner_Details ='http://10.0.2.2:8006/learner_api/v1/getlearnerdetails/';

//LeanerDetails in attendance based on section id
export const Learner_DetailsbysectionId = 'http://lea.moe.bt/learner_api/v1/learnerdetails/getlearnerdetailsbysection/';

//LeanerDetails in attendance based on centreId, courseID and skillID
export const Learner_DetailsbyCentreIDCourseIDSkillID ='http://lea.moe.bt/learner_api/v1/getlearnerdetails/';

//Dzongkhag Details based on user role
export const dzongkhag_url ='http://admin.emis.bt/api/v1/masters/load_dzongkhag_details_by_id/';

//Gewog Details based on user role
export const gewog_url ='http://admin.emis.bt/api/v1/masters/load_gewog_details_by_id/';

//Literacy rate with gewog id
export const literacyRate_url ='http://co.moe.bt/opening_api/v1/getLiteracyInformation/';

//NFE Centre count
export const NfeCount_url = 'http://co.moe.bt/opening_api/v1/getnfecentrecount/';

//CLC Centre count
export const clcCount_url ='http://co.moe.bt/opening_api/v1/getalccentrecount/';

//Total Centre count
export const CenterCount_url ='http://co.moe.bt/opening_api/v1/getcentrecount/';

//Total Learner
export const TotalLeaner_url ='http://lea.moe.bt/learner_api/v1/learnerUpdation/gettotalActiveLearnercount/';

//Monitoring tools type
export const monitoringTools ='http://mon.moe.bt/monitoring_api/v1/getmonitoringtool/';

//CentreList by dzongkhag Id
export const centrelist = 'http://co.moe.bt/opening_api/v1/getcentrebydzoid/';
