select "firstName",
       "lastName",
       sum("amount") as "totalPayments"
from "payments"
join "customers" using ("customerId")
group by "customerId"
order by "totalPayments" desc;
