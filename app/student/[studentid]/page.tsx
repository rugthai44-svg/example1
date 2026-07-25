export default async  function Student({ params }:{
    params: Promise<{studentid: string}>
}) {
    const { studentid } =  await params;
    return (
        <div>
            สวัสดีค้าบ รหัสนักศึกษาผมคือ, {studentid} ค้าบ
        </div>
    );
}