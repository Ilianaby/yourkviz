'use client';


const InputTeamName = () => {
    return (
        <form class='container-fluid row my-5 '>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <input type="text" class="form-control" id="teamName1" placeholder="Введите название команды..." />
                </div>
            </div>
            <div class="row">
                <div class="col-md-4 mb-3">
                    <input type="text" class="form-control" id="teamName2" placeholder="Введите город..." />
                </div>
            </div>
            <div class="col-auto bottom-align">
                <button type="submit" class="p-2 btn btn-default btn-primary"><b>Submit</b></button>
            </div>
        </form>


    );
};
export default InputTeamName;