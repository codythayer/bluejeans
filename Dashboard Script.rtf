{\rtf1\ansi\ansicpg1252\cocoartf2707
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fnil\fcharset0 Menlo-Regular;}
{\colortbl;\red255\green255\blue255;\red20\green67\blue174;\red246\green247\blue249;\red46\green49\blue51;
\red24\green25\blue27;\red162\green0\blue16;\red77\green80\blue85;\red186\green6\blue115;\red18\green115\blue126;
}
{\*\expandedcolortbl;;\cssrgb\c9412\c35294\c73725;\cssrgb\c97255\c97647\c98039;\cssrgb\c23529\c25098\c26275;
\cssrgb\c12549\c12941\c14118;\cssrgb\c70196\c7843\c7059;\cssrgb\c37255\c38824\c40784;\cssrgb\c78824\c15294\c52549;\cssrgb\c3529\c52157\c56863;
}
\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\deftab720
\pard\pardeftab720\partightenfactor0

\f0\fs26 \cf2 \cb3 \expnd0\expndtw0\kerning0
\outl0\strokewidth0 \strokec2 function\cf4 \strokec4  \cf5 \strokec5 runAccountHealthMaster\cf4 \strokec4  () \{\cb1 \
\pard\pardeftab720\partightenfactor0
\cf4 \cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 projectId\cf4 \strokec4  = \cf6 \strokec6 'symmetric-aura-572'\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 request\cf4 \strokec4  = \{\cb1 \
\cb3     \cf5 \strokec5 query\cf4 \strokec4 :   \cf6 \strokec6 'select b.AccountName AccountName, b.AccountType AccountType, b.AccountId AccountId, b.ACV ARR, b.RepName AE, b.Renewal_Account_Manager__c RAM, b.CSM_Name CSM, '\cf4 \strokec4  + \cb1 \
\cb3       \cf6 \strokec6 '  b.Partner_Name__c PartnerName, b.Partner_Status__c PartnerType, b.segment Segment, '\cf4 \strokec4  + \cb1 \
\cb3       \cf6 \strokec6 '  b.Billing_Plan_Detail__c BillingPlan, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  case when b.Billing_Plan_Detail__c like \\'%Named Host%\\' or b.Billing_Plan_Detail__c like \\'%Minute%\\' or b.Billing_Plan_Detail__c like \\'%Port%\\' then regexp_replace(b.Billing_Plan_Quantity__c,\\' \\',\\'\\') else b.Billing_Plan_Quantity__c end BillingQuantity, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  b.NumberOfEmployees NumberOfEmployees, b.TermEndDate TermEndDate, b.Account_Trending__c AccountTrending, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  max(b.last_login_date) LastLoginDate, min(b.Days_To_last_login) DaysSinceLastLoginDate, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  b.Days_To_Term_End Days_To_Term_End, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(iu.UserCount) ProvisionedUsers, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(b.ACV) / 12 / sum(d.Total_Participants_Minutes_30_days) CostPerMin, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(case when b.Billing_Plan_Detail__c like \\'%Named Host%\\' then float(d.ActiveUsers) when b.Billing_Plan_Detail__c like \\'%Minutes%\\' then d.Total_Participants_Minutes_30_days else null end) / '\cf4 \strokec4  + \cb1 \
\cb3       \cf6 \strokec6 '    avg(float(regexp_replace(b.Billing_Plan_Quantity__c,\\' \\',\\'\\'))) Utilization , '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(d.Total_Participants_Minutes_30_days) TotalCallMinutesPast30Days, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(f.Total_Participants_Minutes_60_days_until_30) TotalCallMinutes30To60Day, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  (sum(d.Total_Participants_Minutes_30_days) - sum(f.Total_Participants_Minutes_60_days_until_30)) / sum(f.Total_Participants_Minutes_60_days_until_30) ChangeInMinutes, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(d.ActiveUsers) ActiveUsersPast30Days, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(f.ActiveUsers) ActiveUsers30To60Days, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  (sum(d.ActiveUsers) - sum(f.ActiveUsers)) / sum(f.ActiveUsers) ChangeInUsers, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(d.ContentShare) / sum(d.MeetingCount) ContentSharePercentage, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(d.MeetingRecording) / sum(d.MeetingCount) MeetingRecordingPercentage, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(e.VideoCalls) / sum(d.MeetingCount) VideoPercentage, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(d.MeetingLength) / sum(d.MeetingCount) AvgMeetingDuration, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(e.EndpointsCount) / sum(d.MeetingCount) AvgMeetingSize,  '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(e.RoomSystemsCount) / sum(e.EndpointsCount) RoomSystemPercentage, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(e.MobileCount) / sum(e.EndpointsCount) MobilePercentage, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(e.PSTNCount) / sum(e.EndpointsCount) PSTNPercentage, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(e.LyncCount) / sum(e.EndpointsCount) LyncPercentage, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(e.DisconnectCount) / sum(d.MeetingCount) DisconnectPercentage, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  sum(e.QualarooTotal) / sum(e.QualarooCount) / 5 - 1 AvgQualaroo, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 'from (select BJNId, AccountName, AccountType, ACV, CSM_Name, RepName,Renewal_Account_Manager__c, segment, Billing_Plan_Detail__c, Billing_Plan_Quantity__c, NumberOfEmployees, TermEndDate,Account_Trending__c,  '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    datediff(TermEndDate,current_date()) Days_To_Term_End, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    AccountId, login last_login_date, datediff(current_date(),login) Days_To_last_login, user_id, Partner_Name__c, Partner_Status__c '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  from (select aa.BJNId, aa.AccountName, aa.AccountType, aa.CSM_Name, aa.ACV, aa.segment,RepName, aa.Billing_Plan_Detail__c, aa.Billing_Plan_Quantity__c, aa.NumberOfEmployees,  '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      aa.TermEndDate, aa.Account_Trending__c, aa.Renewal_Account_Manager__c, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      aa.Days_until_End__c, AccountId, u.last_login login, user_id, Partner_Name__c, Partner_Status__c, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      RANK() OVER (PARTITION BY aa.AccountName ORDER BY login desc) rank1 '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    from (select AccountId, FirstName + \\' \\' + LastName CSM_Name , BJNId, RepName, AccountName, AccountType, ACV, segment, NumberOfEmployees , Billing_Plan__c, Billing_Plan_Detail__c, Billing_Plan_Quantity__c, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '        TermEndDate, Account_Trending__c, BJN_Enterprise_ID__c, Days_until_End__c, Renewal_Account_Manager__c, Partner_Name__c, Partner_Status__c '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      from (SELECT  split(s.BJNId, \\'|\\') BJNId,CSM__C, Billing_Plan__c, Billing_Plan_Detail__c, Billing_Plan_Quantity__c, RepName, AccountId, AccountType, s.AccountName, s.ACV, s.segment, s.NumberOfEmployees,  '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '          s.TermEndDate, Account_Trending__c, a.BJN_Enterprise_ID__c, Days_until_End__c, u.FirstName + \\' \\' + u.LastName Renewal_Account_Manager__c, Partner_Name__c, Partner_Status__c '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '        FROM basesummary.accounts_summary s  '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '        left join each basedata.sfdc_accounts a on s.AccountId = a.id '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '        left join each basedata.sfdc_users u on u.Id = a.Renewal_Account_Manager__c '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '        order by AccountName) ss  '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      LEFT JOIN EACH basedata.sfdc_users SU on ss.CSM__C = SU.id) aa '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    left join each (select * from basedata.indigo_users where enterprise_admin = \\'1\\') u on aa.AccountId = u.sfdc_id '\cf4 \strokec4  + \cf7 \strokec7 //EDIT HERE    Ketki wants to change aa.AccountId = u.sfdc_id with aa.BJNId = u.enterprise_id\cf4 \cb1 \strokec4 \
\cb3       \cf6 \strokec6 '    order by aa.AccountName) '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  having rank1 = 1) b '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  left join each (select enterprise_id, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      (sum(cast(total_call_seconds as integer))/60) Total_Participants_Minutes_30_days, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      avg(cast(total_call_seconds as integer)/60) avg_mins_30_days, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct user_id, 1000000) ActiveUsers, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct case when m.content_share = \\'1\\' then m.meeting_uuid else string(null) end, 10000000) ContentShare, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct case when m.meeting_recording = \\'1\\' then m.meeting_uuid else string(null) end, 10000000) MeetingRecording, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      sum(timestamp_to_sec(timestamp(m.end_time)) - timestamp_to_sec(timestamp(m.start_time))) / 60 MeetingLength, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct m.meeting_uuid, 10000000) MeetingCount '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    from basedata.indigo_meetings m '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    where datediff(current_date(), left(start_time,10))< 30 '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    group by  enterprise_id) d on d.enterprise_id = b.BJNId '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  left join each (select enterprise_id,  '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct case when e.endpoint <> \\'PSTN\\' and e.endpoint not like \\'%InterCall%\\' and e.endpoint not like \\'%Partner%\\' then m.meeting_uuid else string(null) end, 1000000) VideoCalls, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct e.callguid, 10000000) EndpointsCount, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct case when e.endpoint in (\\'H323\\',\\'SIP\\',\\'Telepresence\\') then e.callguid else string(null) end) RoomSystemsCount, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct case when e.endpoint in (\\'Acid\\',\\'Base\\') then e.callguid else string(null) end) MobileCount, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct case when e.endpoint = \\'PSTN\\' or e.endpoint like \\'%InterCall%\\' or endpoint like \\'%Partner%\\' then e.callguid else string(null) end) PSTNCount, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct case when e.endpoint = \\'Lync\\' then e.callguid else string(null) end) LyncCount,  '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      count(distinct case when e.disconnect_reason like \\'%Error%\\' then m.meeting_uuid else string(null) end, 10000000) DisconnectCount, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      sum(case when e.qualaroo_feedback > \\'0\\' then integer(e.qualaroo_feedback) else 0 end) QualarooTotal, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '      sum(case when e.qualaroo_feedback > \\'0\\' then 1 else 0 end) QualarooCount     '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    from basedata.indigo_meetings m '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    left join each basedata.indigo_endpoints e on e.meeting_uuid = m.meeting_uuid '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    where datediff(current_date(), left(start_time,10))< 30 '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    group by  enterprise_id) e on e.enterprise_id = b.BJNId '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 'left join each (select enterprise_id, (sum(cast(total_call_seconds as integer))/60) Total_Participants_Minutes_60_days_until_30, '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    count(distinct user_id, 1000000) ActiveUsers '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  from basedata.indigo_meetings '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  where datediff(DATE_ADD(TIMESTAMP(current_date()), -2, "MONTH"), left(start_time,10)) > 0 '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '    and datediff(DATE_ADD(TIMESTAMP(current_date()), -2, "MONTH"), left(start_time,10))< 30 '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  group by enterprise_name, enterprise_id '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 '  order by enterprise_name) f on f.enterprise_id = b.BJNId '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 'left join each (select enterprise_id, count(distinct user_id, 10000000) UserCount from basedata.indigo_users where user_type like \\'%PAID%\\' or user_type like \\'%VIP%\\' group by enterprise_id) iu on iu.enterprise_id = b.BJNId '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 'group by AccountName, AccountId, AccountType, ARR, AE, RAM, CSM, PartnerName, PartnerType, Segment, BillingPlan, BillingQuantity, NumberOfEmployees, TermEndDate, AccountTrending, Days_To_Term_End '\cf4 \strokec4  +\cb1 \
\cb3       \cf6 \strokec6 'order by ARR desc'\cf4 \cb1 \strokec4 \
\cb3   \}\cb1 \
\cb3   \cb1 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 queryResults\cf4 \strokec4  = \cf8 \strokec8 BigQuery\cf4 \strokec4 .\cf8 \strokec8 Jobs\cf4 \strokec4 .\cf5 \strokec5 query\cf4 \strokec4 (\cf5 \strokec5 request\cf4 \strokec4 , \cf5 \strokec5 projectId\cf4 \strokec4 );\cb1 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 jobId\cf4 \strokec4  = \cf5 \strokec5 queryResults\cf4 \strokec4 .\cf5 \strokec5 jobReference\cf4 \strokec4 .\cf5 \strokec5 jobId\cf4 \strokec4 ;\cb1 \
\
\cb3   \cf7 \strokec7 // Check on status of the Query Job.\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 sleepTimeMs\cf4 \strokec4  = \cf9 \strokec9 500\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 while\cf4 \strokec4  (!\cf5 \strokec5 queryResults\cf4 \strokec4 .\cf5 \strokec5 jobComplete\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf8 \strokec8 Utilities\cf4 \strokec4 .\cf5 \strokec5 sleep\cf4 \strokec4 (\cf5 \strokec5 sleepTimeMs\cf4 \strokec4 );\cb1 \
\cb3     \cf5 \strokec5 sleepTimeMs\cf4 \strokec4  *= \cf9 \strokec9 2\cf4 \strokec4 ;\cb1 \
\cb3     \cf5 \strokec5 queryResults\cf4 \strokec4  = \cf8 \strokec8 BigQuery\cf4 \strokec4 .\cf8 \strokec8 Jobs\cf4 \strokec4 .\cf5 \strokec5 getQueryResults\cf4 \strokec4 (\cf5 \strokec5 projectId\cf4 \strokec4 , \cf5 \strokec5 jobId\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf7 \strokec7 // Get all the rows of results.\cf4 \cb1 \strokec4 \
\cb3   \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 rows\cf4 \strokec4  = \cf5 \strokec5 queryResults\cf4 \strokec4 .\cf5 \strokec5 rows\cf4 \strokec4 ;\cb1 \
\cb3   \cf2 \strokec2 while\cf4 \strokec4  (\cf5 \strokec5 queryResults\cf4 \strokec4 .\cf5 \strokec5 pageToken\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf5 \strokec5 queryResults\cf4 \strokec4  = \cf8 \strokec8 BigQuery\cf4 \strokec4 .\cf8 \strokec8 Jobs\cf4 \strokec4 .\cf5 \strokec5 getQueryResults\cf4 \strokec4 (\cf5 \strokec5 projectId\cf4 \strokec4 , \cf5 \strokec5 jobId\cf4 \strokec4 , \{\cb1 \
\cb3       \cf5 \strokec5 pageToken\cf4 \strokec4 : \cf5 \strokec5 queryResults\cf4 \strokec4 .\cf5 \strokec5 pageToken\cf4 \cb1 \strokec4 \
\cb3     \});\cb1 \
\cb3     \cf5 \strokec5 rows\cf4 \strokec4  = \cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 concat\cf4 \strokec4 (\cf5 \strokec5 queryResults\cf4 \strokec4 .\cf5 \strokec5 rows\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\
\cb3   \cf2 \strokec2 if\cf4 \strokec4  (\cf5 \strokec5 rows\cf4 \strokec4 ) \{\cb1 \
\cb3     \cf7 \strokec7 //var spreadsheet = SpreadsheetApp.create('BiqQuery Results');\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 spreadsheet\cf4 \strokec4  = \cf8 \strokec8 SpreadsheetApp\cf4 \strokec4 .\cf5 \strokec5 getActive\cf4 \strokec4 ();\cb1 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 sheet\cf4 \strokec4  = \cf5 \strokec5 spreadsheet\cf4 \strokec4 .\cf5 \strokec5 getSheetByName\cf4 \strokec4 (\cf6 \strokec6 'Account Health Master'\cf4 \strokec4 );    \cb1 \
\cb3     \cb1 \
\cb3     \cf7 \strokec7 // Append the headers.\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 headers\cf4 \strokec4  = \cf5 \strokec5 queryResults\cf4 \strokec4 .\cf5 \strokec5 schema\cf4 \strokec4 .\cf5 \strokec5 fields\cf4 \strokec4 .\cf5 \strokec5 map\cf4 \strokec4 (\cf2 \strokec2 function\cf4 \strokec4 (\cf5 \strokec5 field\cf4 \strokec4 ) \{\cb1 \
\cb3       \cf2 \strokec2 return\cf4 \strokec4  \cf5 \strokec5 field\cf4 \strokec4 .\cf5 \strokec5 name\cf4 \strokec4 ;\cb1 \
\cb3     \});\cb1 \
\cb3     \cb1 \
\cb3     \cf7 \strokec7 //sheet.appendRow(headers);\cf4 \cb1 \strokec4 \
\
\cb3     \cf7 \strokec7 // Append the results.\cf4 \cb1 \strokec4 \
\cb3     \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 data\cf4 \strokec4  = \cf2 \strokec2 new\cf4 \strokec4  \cf8 \strokec8 Array\cf4 \strokec4 (\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 );\cb1 \
\cb3     \cf2 \strokec2 for\cf4 \strokec4  (\cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 i\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ; \cf5 \strokec5 i\cf4 \strokec4  < \cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ; \cf5 \strokec5 i\cf4 \strokec4 ++) \{\cb1 \
\cb3       \cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 cols\cf4 \strokec4  = \cf5 \strokec5 rows\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ].\cf5 \strokec5 f\cf4 \strokec4 ;\cb1 \
\cb3       \cf5 \strokec5 data\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ] = \cf2 \strokec2 new\cf4 \strokec4  \cf8 \strokec8 Array\cf4 \strokec4 (\cf5 \strokec5 cols\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 );\cb1 \
\cb3       \cf2 \strokec2 for\cf4 \strokec4  (\cf2 \strokec2 var\cf4 \strokec4  \cf5 \strokec5 j\cf4 \strokec4  = \cf9 \strokec9 0\cf4 \strokec4 ; \cf5 \strokec5 j\cf4 \strokec4  < \cf5 \strokec5 cols\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ; \cf5 \strokec5 j\cf4 \strokec4 ++) \{\cb1 \
\cb3         \cf5 \strokec5 data\cf4 \strokec4 [\cf5 \strokec5 i\cf4 \strokec4 ][\cf5 \strokec5 j\cf4 \strokec4 ] = \cf5 \strokec5 cols\cf4 \strokec4 [\cf5 \strokec5 j\cf4 \strokec4 ].\cf5 \strokec5 v\cf4 \strokec4 ;\cb1 \
\cb3     \}\cb1 \
\cb3   \}\cb1 \
\cb3   \cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 , \cf9 \strokec9 1\cf4 \strokec4 , \cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 , \cf5 \strokec5 headers\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 ).\cf5 \strokec5 clear\cf4 \strokec4 (\{\cf5 \strokec5 contentsOnly\cf4 \strokec4 : \cf2 \strokec2 true\cf4 \strokec4 \}).\cf5 \strokec5 setValues\cf4 \strokec4 (\cf5 \strokec5 data\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 4\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 1\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "$#,###"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 16\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 1\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "m/d/yy"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 17\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 3\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "#,###"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 20\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 1\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "$0.##"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 21\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 1\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "0.#%"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 22\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 2\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "#,###"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 24\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 1\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "0.#%"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 25\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 2\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "#,###"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 27\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 4\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "0.#%"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 31\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 2\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "#,###"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 33\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 5\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "0.#%"\cf4 \strokec4 )\cb1 \
\cb3   \cf5 \strokec5 sheet\cf4 \strokec4 .\cf5 \strokec5 getRange\cf4 \strokec4 (\cf9 \strokec9 3\cf4 \strokec4 ,\cf9 \strokec9 38\cf4 \strokec4 ,\cf5 \strokec5 rows\cf4 \strokec4 .\cf5 \strokec5 length\cf4 \strokec4 +\cf9 \strokec9 1\cf4 \strokec4 ,\cf9 \strokec9 2\cf4 \strokec4 ).\cf5 \strokec5 setNumberFormat\cf4 \strokec4 (\cf6 \strokec6 "#.#"\cf4 \strokec4 )\cb1 \
\cb3   \cb1 \
\cb3   \cf8 \strokec8 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf6 \strokec6 'Results spreadsheet created: %s'\cf4 \strokec4 , \cf5 \strokec5 spreadsheet\cf4 \strokec4 .\cf5 \strokec5 getUrl\cf4 \strokec4 ());\cb1 \
\cb3   \} \cf2 \strokec2 else\cf4 \strokec4  \{\cb1 \
\cb3   \cf8 \strokec8 Logger\cf4 \strokec4 .\cf5 \strokec5 log\cf4 \strokec4 (\cf6 \strokec6 'No rows returned.'\cf4 \strokec4 );\cb1 \
\cb3   \}\cb1 \
\cb3    \cb1 \
\cb3   \cf8 \strokec8 MailApp\cf4 \strokec4 .\cf5 \strokec5 sendEmail\cf4 \strokec4 (\{\cb1 \
\cb3      \cf5 \strokec5 to\cf4 \strokec4 : \cf6 \strokec6 "codythayer@bluejeansnet.com,"\cf4 \strokec4  +\cb1 \
\cb3          \cf6 \strokec6 "codythayer@gmail.com"\cf4 \strokec4 ,\cb1 \
\cb3      \cf5 \strokec5 subject\cf4 \strokec4 : \cf6 \strokec6 "Account Health Dashboard - Weekly Update"\cf4 \strokec4 ,\cb1 \
\cb3      \cf5 \strokec5 body\cf4 \strokec4 : \cf6 \strokec6 "Hello,\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "Attached is the current version of the Account Health Dashboard. To view, follow the link below. To edit, please make a copy of the dasboard to your personal drive.\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "https://docs.google.com/spreadsheets/d/16EFzXUlUDMHT7sx-5V8_i0XhO5O-J7N-slpGr9nPGnI/edit#gid=500594330\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "\\n"\cf4 \strokec4 +\cb1 \
\cb3            \cf6 \strokec6 "Thanks,\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "The Data Science Team\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "\\n"\cf4 \strokec4  +\cb1 \
\cb3            \cf6 \strokec6 "Please direct any questions to Michael Geller or Cody Thayer."\cf4 \cb1 \strokec4 \
\cb3    \});\cb1 \
}