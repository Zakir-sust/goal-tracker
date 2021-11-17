import express from 'express'
import routeCtrl from './route.controller.js'

const router = express.Router();


router.route('/user')
.post(routeCtrl.apiAddUser)
.get(routeCtrl.apiGetUsers);


router.route('/goals')
.get(routeCtrl.apiGetGoal)
.post(routeCtrl.apiAddGoal)
.delete(routeCtrl.apiDeleteGoal);


router.route('/completed-goals')
.get(routeCtrl.apiGetCompletedGoals)
.post(routeCtrl.apiAddCompletedGoal);

export default router;

