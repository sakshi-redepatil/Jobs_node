const schedule = require('node-schedule');
const db=require('../models')
const rule = new schedule.RecurrenceRule();
// rule.dayOfWeek = [0, new schedule.Range(4, 6)];
rule.hour = 16;
rule.minute = 48;

const job = schedule.scheduleJob(rule, function(){
  db.userlog.update({ status: false },{where:{status:true}});
  console.log("all Active sessions are removed")
            
});

module.exports=job;