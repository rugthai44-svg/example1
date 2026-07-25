export default async  function hello({ params }:{
    params: Promise<{
        name: string,
        age:string
    }>
}) {
    const { name, age } =  await params;
    return (
        <div>
            สวัสดีค้าบ ชื่อ {name} อายุ {age} ค้าบ
        </div>
    );
}