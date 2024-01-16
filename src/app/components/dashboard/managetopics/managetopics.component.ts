import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-managetopics',
  templateUrl: './managetopics.component.html',
  styleUrls: ['./managetopics.component.scss']
})
export class ManagetopicsComponent implements OnInit {

  public tableData: any = [];

  public newRow = { course_id: null, topic_name: '', course_name: '', topic_link: '' };

  constructor(
    public helperService: HelperService, // CREATING HELPER SERVICE ALIAS.
  ) { }

  ngOnInit(): void {
    this.getAllTopics();
  }

  getAllTopics() {
    let api: any = 'getalltopics.php';
    let payload: any = '';
    this.helperService.performPostRequest(api, payload).subscribe((res: any) => {

      if (res.success) {     
        this.tableData = res.data;
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

    let api = 'updatetopic.php';
    this.helperService.performPostRequest(api, updatedRow).subscribe((res: any) => {
      console.log("Updated user response", res);
    });
   console.log(updatedRow, "updatedRow");
  }

  deleteRow(index: number) {
    let topicId: any = this.tableData[index].topic_id;
    console.log(topicId, "deletedUserId");
    let api = 'deletetopic.php';
    this.helperService.performPostRequest(api, { topic_id: topicId }).subscribe((res: any) => {
      console.log("Deleted user response", res);
      this.tableData.splice(index, 1);
    });
  }

  addRow() {
    console.log("add row", this.newRow);
    this.tableData.push({ ...this.newRow });
    let api = 'addtopic.php';

    this.helperService.performPostRequest(api, this.newRow).subscribe((res: any) => {
      console.log("adding user response", res);
    });
  }

}
