import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-manageusers',
  templateUrl: './manageusers.component.html',
  styleUrls: ['./manageusers.component.scss']
})
export class ManageusersComponent implements OnInit {

  public tableData: any = [];

  public newRow = { user_id: null, user_name: '', user_email: '', role_id: '3' };


  constructor(
    public helperService: HelperService, // CREATING HELPER SERVICE ALIAS.
  ) { }

  ngOnInit(): void {
    this.getUsersData();
  }

  getUsersData() {
    let api: any = 'getusers.php';
    let payload: any = '';
    this.helperService.performPostRequest(api, payload).subscribe((res: any) => {

      if (res.success) {
        
        this.tableData = res.data;
        // console.log("response", this.tableData);
      }
    });
  }

  onEdit(event: any, index: number, field: string) {
    console.log(event, index, field, "event, index, field");
    this.tableData[index][field] = event.target.textContent.trim();
    console.log(event.target.textContent, "event.target.textContent");
  }

  saveRow(index: number) {
    console.log("index", index);
    let updatedRow: any = this.tableData[index];

    let api = 'updateusers.php';
    this.helperService.performPostRequest(api, updatedRow).subscribe((res: any) => {
      console.log("Updated user response", res);
    });
  //  console.log(updatedRow, "updatedRow");
  }

  deleteRow(index: number) {
    let userId: any = this.tableData[index].user_id;
    console.log(userId, "deletedUserId");
    let api = 'deleteusers.php';
    this.helperService.performPostRequest(api, { user_id: userId }).subscribe((res: any) => {
      console.log("Deleted user response", res);
      this.tableData.splice(index, 1);
    });
  }

  addRow() {
    console.log("add row", this.newRow);
    this.tableData.push({ ...this.newRow });
    let api = 'adduser.php';

    this.helperService.performPostRequest(api, this.newRow).subscribe((res: any) => {
      console.log("adding user response", res);
    });
  }


}
