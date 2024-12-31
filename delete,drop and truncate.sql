select * from [dbo].[employeerecords]

select * into #2 from [dbo].[employeerecords]

select * from #2

insert into #2 values(7,'bishant','karki','0',1200)

delete from #2 
where department='0' or department is null

select * from #2

truncate table #2
-- all records deleted

drop table #2



