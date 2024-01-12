function runAccountHealthMaster () {
  var projectId = 'symmetric-aura-572';

  var request = {
    query:   'select b.AccountName AccountName, b.AccountType AccountType, b.AccountId AccountId, b.ACV ARR, b.RepName AE, b.Renewal_Account_Manager__c RAM, b.CSM_Name CSM, ' + 
      '  b.Partner_Name__c PartnerName, b.Partner_Status__c PartnerType, b.segment Segment, ' + 
      '  b.Billing_Plan_Detail__c BillingPlan, ' +
      '  case when b.Billing_Plan_Detail__c like \'%Named Host%\' or b.Billing_Plan_Detail__c like \'%Minute%\' or b.Billing_Plan_Detail__c like \'%Port%\' then regexp_replace(b.Billing_Plan_Quantity__c,\' \',\'\') else b.Billing_Plan_Quantity__c end BillingQuantity, ' +
      '  b.NumberOfEmployees NumberOfEmployees, b.TermEndDate TermEndDate, b.Account_Trending__c AccountTrending, ' +
      '  max(b.last_login_date) LastLoginDate, min(b.Days_To_last_login) DaysSinceLastLoginDate, ' +
      '  b.Days_To_Term_End Days_To_Term_End, ' +
      '  sum(iu.UserCount) ProvisionedUsers, ' +
      '  sum(b.ACV) / 12 / sum(d.Total_Participants_Minutes_30_days) CostPerMin, ' +
      '  sum(case when b.Billing_Plan_Detail__c like \'%Named Host%\' then float(d.ActiveUsers) when b.Billing_Plan_Detail__c like \'%Minutes%\' then d.Total_Participants_Minutes_30_days else null end) / ' + 
      '    avg(float(regexp_replace(b.Billing_Plan_Quantity__c,\' \',\'\'))) Utilization , ' +
      '  sum(d.Total_Participants_Minutes_30_days) TotalCallMinutesPast30Days, ' +
      '  sum(f.Total_Participants_Minutes_60_days_until_30) TotalCallMinutes30To60Day, ' +
      '  (sum(d.Total_Participants_Minutes_30_days) - sum(f.Total_Participants_Minutes_60_days_until_30)) / sum(f.Total_Participants_Minutes_60_days_until_30) ChangeInMinutes, ' +
      '  sum(d.ActiveUsers) ActiveUsersPast30Days, ' +
      '  sum(f.ActiveUsers) ActiveUsers30To60Days, ' +
      '  (sum(d.ActiveUsers) - sum(f.ActiveUsers)) / sum(f.ActiveUsers) ChangeInUsers, ' +
      '  sum(d.ContentShare) / sum(d.MeetingCount) ContentSharePercentage, ' +
      '  sum(d.MeetingRecording) / sum(d.MeetingCount) MeetingRecordingPercentage, ' +
      '  sum(e.VideoCalls) / sum(d.MeetingCount) VideoPercentage, ' +
      '  sum(d.MeetingLength) / sum(d.MeetingCount) AvgMeetingDuration, ' +
      '  sum(e.EndpointsCount) / sum(d.MeetingCount) AvgMeetingSize,  ' +
      '  sum(e.RoomSystemsCount) / sum(e.EndpointsCount) RoomSystemPercentage, ' +
      '  sum(e.MobileCount) / sum(e.EndpointsCount) MobilePercentage, ' +
      '  sum(e.PSTNCount) / sum(e.EndpointsCount) PSTNPercentage, ' +
      '  sum(e.LyncCount) / sum(e.EndpointsCount) LyncPercentage, ' +
      '  sum(e.DisconnectCount) / sum(d.MeetingCount) DisconnectPercentage, ' +
      '  sum(e.QualarooTotal) / sum(e.QualarooCount) / 5 - 1 AvgQualaroo, ' +
      'from (select BJNId, AccountName, AccountType, ACV, CSM_Name, RepName,Renewal_Account_Manager__c, segment, Billing_Plan_Detail__c, Billing_Plan_Quantity__c, NumberOfEmployees, TermEndDate,Account_Trending__c,  ' +
      '    datediff(TermEndDate,current_date()) Days_To_Term_End, ' +
      '    AccountId, login last_login_date, datediff(current_date(),login) Days_To_last_login, user_id, Partner_Name__c, Partner_Status__c ' +
      '  from (select aa.BJNId, aa.AccountName, aa.AccountType, aa.CSM_Name, aa.ACV, aa.segment,RepName, aa.Billing_Plan_Detail__c, aa.Billing_Plan_Quantity__c, aa.NumberOfEmployees,  ' +
      '      aa.TermEndDate, aa.Account_Trending__c, aa.Renewal_Account_Manager__c, ' +
      '      aa.Days_until_End__c, AccountId, u.last_login login, user_id, Partner_Name__c, Partner_Status__c, ' +
      '      RANK() OVER (PARTITION BY aa.AccountName ORDER BY login desc) rank1 ' +
      '    from (select AccountId, FirstName + \' \' + LastName CSM_Name , BJNId, RepName, AccountName, AccountType, ACV, segment, NumberOfEmployees , Billing_Plan__c, Billing_Plan_Detail__c, Billing_Plan_Quantity__c, ' +
      '        TermEndDate, Account_Trending__c, BJN_Enterprise_ID__c, Days_until_End__c, Renewal_Account_Manager__c, Partner_Name__c, Partner_Status__c ' +
      '      from (SELECT  split(s.BJNId, \'|\') BJNId,CSM__C, Billing_Plan__c, Billing_Plan_Detail__c, Billing_Plan_Quantity__c, RepName, AccountId, AccountType, s.AccountName, s.ACV, s.segment, s.NumberOfEmployees,  ' +
      '          s.TermEndDate, Account_Trending__c, a.BJN_Enterprise_ID__c, Days_until_End__c, u.FirstName + \' \' + u.LastName Renewal_Account_Manager__c, Partner_Name__c, Partner_Status__c ' +
      '        FROM basesummary.accounts_summary s  ' +
  	  '        left join each basedata.sfdc_accounts a on s.AccountId = a.id ' +
      '        left join each basedata.sfdc_users u on u.Id = a.Renewal_Account_Manager__c ' +
      '        order by AccountName) ss  ' +
      '      LEFT JOIN EACH basedata.sfdc_users SU on ss.CSM__C = SU.id) aa ' +
      '    left join each (select * from basedata.indigo_users where enterprise_admin = \'1\') u on aa.AccountId = u.sfdc_id ' + //EDIT HERE    Ketki wants to change aa.AccountId = u.sfdc_id with aa.BJNId = u.enterprise_id
      '    order by aa.AccountName) ' +
      '  having rank1 = 1) b ' +
      '  left join each (select enterprise_id, ' +
      '      (sum(cast(total_call_seconds as integer))/60) Total_Participants_Minutes_30_days, ' +
      '      avg(cast(total_call_seconds as integer)/60) avg_mins_30_days, ' +
      '      count(distinct user_id, 1000000) ActiveUsers, ' +
      '      count(distinct case when m.content_share = \'1\' then m.meeting_uuid else string(null) end, 10000000) ContentShare, ' +
      '      count(distinct case when m.meeting_recording = \'1\' then m.meeting_uuid else string(null) end, 10000000) MeetingRecording, ' +
      '      sum(timestamp_to_sec(timestamp(m.end_time)) - timestamp_to_sec(timestamp(m.start_time))) / 60 MeetingLength, ' +
      '      count(distinct m.meeting_uuid, 10000000) MeetingCount ' +
      '    from basedata.indigo_meetings m ' +
      '    where datediff(current_date(), left(start_time,10))< 30 ' +
      '    group by  enterprise_id) d on d.enterprise_id = b.BJNId ' +
      '  left join each (select enterprise_id,  ' +
      '      count(distinct case when e.endpoint <> \'PSTN\' and e.endpoint not like \'%InterCall%\' and e.endpoint not like \'%Partner%\' then m.meeting_uuid else string(null) end, 1000000) VideoCalls, ' +
      '      count(distinct e.callguid, 10000000) EndpointsCount, ' +
      '      count(distinct case when e.endpoint in (\'H323\',\'SIP\',\'Telepresence\') then e.callguid else string(null) end) RoomSystemsCount, ' +
      '      count(distinct case when e.endpoint in (\'Acid\',\'Base\') then e.callguid else string(null) end) MobileCount, ' +
      '      count(distinct case when e.endpoint = \'PSTN\' or e.endpoint like \'%InterCall%\' or endpoint like \'%Partner%\' then e.callguid else string(null) end) PSTNCount, ' +
      '      count(distinct case when e.endpoint = \'Lync\' then e.callguid else string(null) end) LyncCount,  ' +
      '      count(distinct case when e.disconnect_reason like \'%Error%\' then m.meeting_uuid else string(null) end, 10000000) DisconnectCount, ' +
      '      sum(case when e.qualaroo_feedback > \'0\' then integer(e.qualaroo_feedback) else 0 end) QualarooTotal, ' +
      '      sum(case when e.qualaroo_feedback > \'0\' then 1 else 0 end) QualarooCount     ' +
      '    from basedata.indigo_meetings m ' +
      '    left join each basedata.indigo_endpoints e on e.meeting_uuid = m.meeting_uuid ' +
      '    where datediff(current_date(), left(start_time,10))< 30 ' +
      '    group by  enterprise_id) e on e.enterprise_id = b.BJNId ' +
      'left join each (select enterprise_id, (sum(cast(total_call_seconds as integer))/60) Total_Participants_Minutes_60_days_until_30, ' +
      '    count(distinct user_id, 1000000) ActiveUsers ' +
      '  from basedata.indigo_meetings ' +
      '  where datediff(DATE_ADD(TIMESTAMP(current_date()), -2, "MONTH"), left(start_time,10)) > 0 ' +
      '    and datediff(DATE_ADD(TIMESTAMP(current_date()), -2, "MONTH"), left(start_time,10))< 30 ' +
      '  group by enterprise_name, enterprise_id ' +
      '  order by enterprise_name) f on f.enterprise_id = b.BJNId ' +
      'left join each (select enterprise_id, count(distinct user_id, 10000000) UserCount from basedata.indigo_users where user_type like \'%PAID%\' or user_type like \'%VIP%\' group by enterprise_id) iu on iu.enterprise_id = b.BJNId ' +
      'group by AccountName, AccountId, AccountType, ARR, AE, RAM, CSM, PartnerName, PartnerType, Segment, BillingPlan, BillingQuantity, NumberOfEmployees, TermEndDate, AccountTrending, Days_To_Term_End ' +
      'order by ARR desc'
  }
  
  var queryResults = BigQuery.Jobs.query(request, projectId);
  var jobId = queryResults.jobReference.jobId;

  // Check on status of the Query Job.
  var sleepTimeMs = 500;
  while (!queryResults.jobComplete) {
    Utilities.sleep(sleepTimeMs);
    sleepTimeMs *= 2;
    queryResults = BigQuery.Jobs.getQueryResults(projectId, jobId);
  }

  // Get all the rows of results.
  var rows = queryResults.rows;
  while (queryResults.pageToken) {
    queryResults = BigQuery.Jobs.getQueryResults(projectId, jobId, {
      pageToken: queryResults.pageToken
    });
    rows = rows.concat(queryResults.rows);
  }

  if (rows) {
    //var spreadsheet = SpreadsheetApp.create('BiqQuery Results');
    var spreadsheet = SpreadsheetApp.getActive();
    var sheet = spreadsheet.getSheetByName('Account Health Master');    
    
    // Append the headers.
    var headers = queryResults.schema.fields.map(function(field) {
      return field.name;
    });
    
    //sheet.appendRow(headers);

    // Append the results.
    var data = new Array(rows.length);
    for (var i = 0; i < rows.length; i++) {
      var cols = rows[i].f;
      data[i] = new Array(cols.length);
      for (var j = 0; j < cols.length; j++) {
        data[i][j] = cols[j].v;
    }
  }
  
  sheet.getRange(3, 1, rows.length, headers.length).clear({contentsOnly: true}).setValues(data)
  sheet.getRange(3,4,rows.length+1,1).setNumberFormat("$#,###")
  sheet.getRange(3,16,rows.length+1,1).setNumberFormat("m/d/yy")
  sheet.getRange(3,17,rows.length+1,3).setNumberFormat("#,###")
  sheet.getRange(3,20,rows.length+1,1).setNumberFormat("$0.##")
  sheet.getRange(3,21,rows.length+1,1).setNumberFormat("0.#%")
  sheet.getRange(3,22,rows.length+1,2).setNumberFormat("#,###")
  sheet.getRange(3,24,rows.length+1,1).setNumberFormat("0.#%")
  sheet.getRange(3,25,rows.length+1,2).setNumberFormat("#,###")
  sheet.getRange(3,27,rows.length+1,4).setNumberFormat("0.#%")
  sheet.getRange(3,31,rows.length+1,2).setNumberFormat("#,###")
  sheet.getRange(3,33,rows.length+1,5).setNumberFormat("0.#%")
  sheet.getRange(3,38,rows.length+1,2).setNumberFormat("#.#")
  
  Logger.log('Results spreadsheet created: %s', spreadsheet.getUrl());
  } else {
  Logger.log('No rows returned.');
  }
   
  MailApp.sendEmail({
     to: "codythayer@bluejeansnet.com," +
         "codythayer@gmail.com",
     subject: "Account Health Dashboard - Weekly Update",
     body: "Hello,\n" +
           "\n" +
           "Attached is the current version of the Account Health Dashboard. To view, follow the link below. To edit, please make a copy of the dasboard to your personal drive.\n" +
           "\n" +
           "https://docs.google.com/spreadsheets/d/16EFzXUlUDMHT7sx-5V8_i0XhO5O-J7N-slpGr9nPGnI/edit#gid=500594330\n" +
           "\n"+
           "Thanks,\n" +
           "The Data Science Team\n" +
           "\n" +
           "\n" +
           "\n" +
           "Please direct any questions to Michael Geller or Cody Thayer."
   });
