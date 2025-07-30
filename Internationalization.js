
const uscurrency=new Intl.NumberFormat("en-US",{
    style:"currency",
    currency:"USD"
});

console.log(uscurrency.format(56.7));

console.table(uscurrency.formatToParts(56.7));


const locale1 = new Intl.Locale("en-US");
const locale2 = new Intl.Locale("en-in");

console.log(locale1.region,locale1.language);
console.log(locale2.region,locale2.language);

const locale3=new Intl.Locale("fr-Arab-IN");

console.log(locale3.region,locale3.language,locale3.script);


const dateFormat = new Intl.DateTimeFormat('hi-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
console.log(dateFormat.format(new Date('2002','11','24')));

const timeFormatter = new Intl.DateTimeFormat('hi-IN', {
  hour: '2-digit',
minute: '2-digit',
second:'2-digit'
});
console.log(timeFormatter.format(new Date()));

const timeFormatter1 = new Intl.DateTimeFormat("en-US", {

  dateStyle:"full",
  timeStyle: "full",
});

const targetDate = new Date(2025, 6, 30, 15, 50, 56); 
console.log(timeFormatter1.format(targetDate));

const numberformat=[];

const styles=[{style:"decimal"},
            {style:"percent"},
            {style:"currency", currency:"USD"}];



for (const option of styles)
{
    const number=new Intl.NumberFormat("en-US",option);
     numberformat.push({style:option.style,output:number.format(98765432)});
}
console.table(numberformat);

const numberFormatter = new Intl.NumberFormat(navigator.languages);
console.log(numberFormatter.format(1234567.89));
