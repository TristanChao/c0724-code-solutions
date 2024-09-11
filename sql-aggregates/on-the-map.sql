select "countries"."name" as "country",
       count("cities"."name") as "totalCities"
from "countries"
join "cities" on "cities"."countryId" = "countries"."countryId"
group by "countries"."name"
order by "countries"."name";
