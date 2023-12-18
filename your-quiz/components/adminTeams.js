'use client';

const TeamNames = () => {
    return (
        // <form class='container-fluid my-5'>

<form className='container-fluid my-5'>
            <h1>Команды</h1>

            {/* <div className="d-flex justify-content-between align-items-right"> */}
                <table style={{ tableLayout: 'auto', width: 'auto' }}>
                    <thead>
                        <tr>
                            <th>N</th>
                            <th>Команда</th>
                            <th>На Месте</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>John Doe</td>
                            <td>30</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Jane Smith</td>
                            <td>25</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Sam Johnson</td>
                            <td>35</td>
                        </tr>
                    </tbody>
                </table>

                <div className="col-auto">
                    <button type="submit" className="p-2 btn btn-default btn-primary"><b>Submit</b></button>
                </div>
            {/* </div> */}
        </form>


    );
};
export default TeamNames;