import { Component, OnInit } from '@angular/core';
import { HelperService } from '../../services/helper.service';

@Component({
  selector: 'app-managecourses',
  templateUrl: './managecourses.component.html',
  styleUrls: ['./managecourses.component.scss']
})
export class ManagecoursesComponent implements OnInit {

  public tableData: any = [];
  public topicTableData: any = [];
  public newRow = { course_id: null, course_name: '', total_topics: '' };
  public newTopicRow = { course_id: null, topic_name: '', course_name: '', topic_link: '' };

  public isEditable: boolean = false;

  constructor(
    public helperService: HelperService, // CREATING HELPER SERVICE ALIAS.
  ) { }

  ngOnInit(): void {
    this.getAllCourses();
    // this.getAllTopics();
  }

  getAllCourses() {
    let api: any = 'getallcourses.php';
    let payload: any = '';
    this.helperService.performPostRequest(api, payload).subscribe((res: any) => {

      if (res.success) {
        
        this.tableData = res.data;
        // console.log("response", this.tableData);
      }
    });
  }

  onEdit(row: any) {
    console.log(row,"event");
    // this.tableData[index][field] = event.target.textContent.trim();
    // console.log(event.target.textContent, "event.target.textContent");

    this.isEditable = true;

    if(this.isEditable == true) {
      this.getTopicByCourseId(row.course_id);
    }
  }

  getTopicByCourseId(course_id: any) {
    let api = 'gettopicsbycourseid.php';
    this.helperService.performPostRequest(api, course_id).subscribe((res: any) => {
      console.log("Updated user response", res);

      this.topicTableData = res.data;
    });
  }

  saveRow(index: number) {
    console.log("index", index);
    let updatedRow: any = this.tableData[index];

    let api = 'updatecourse.php';
    this.helperService.performPostRequest(api, updatedRow).subscribe((res: any) => {
      console.log("Updated user response", res);
    });
  //  console.log(updatedRow, "updatedRow");
  }

  deleteRow(index: number) {
    let userId: any = this.tableData[index].user_id;
    console.log(userId, "deletedUserId");
    let api = 'deletecourse.php';
    this.helperService.performPostRequest(api, { user_id: userId }).subscribe((res: any) => {
      console.log("Deleted user response", res);
      this.tableData.splice(index, 1);
    });
  }

  addRow() {
    console.log("add row", this.newRow);
    this.tableData.push({ ...this.newRow });
    let api = 'addcourse.php';

    this.helperService.performPostRequest(api, this.newRow).subscribe((res: any) => {
      console.log("adding user response", res);
    });
  }

  getAllTopics() {
    let api: any = 'getalltopics.php';
    let payload: any = '';
    this.helperService.performPostRequest(api, payload).subscribe((res: any) => {

      if (res.success) {     
        this.topicTableData = res.data;
      }
    });
  }

  onTopicEdit(event: any, index: number, field: string) {
    console.log(event, index, field, "event, index, field");
    this.topicTableData[index][field] = event.target.textContent.trim();
    console.log(event.target.textContent, "event.target.textContent");
  }

  saveTopicRow(index: number) {
    console.log("index", index);
    let updatedRow: any = this.topicTableData[index];

    let api = 'updatetopic.php';
    this.helperService.performPostRequest(api, updatedRow).subscribe((res: any) => {
      console.log("Updated user response", res);
    });
   console.log(updatedRow, "updatedRow");
  }

  deleteTopicRow(index: number) {
    let topicId: any = this.topicTableData[index].topic_id;
    console.log(topicId, "deletedUserId");
    let api = 'deletetopic.php';
    this.helperService.performPostRequest(api, { topic_id: topicId }).subscribe((res: any) => {
      console.log("Deleted user response", res);
      this.topicTableData.splice(index, 1);
    });
  }

  addTopicRow() {
    this.topicTableData = [];
    console.log("add row", this.newRow);
    this.isEditable = false;
    
    let api = 'addtopic.php';

    this.helperService.performPostRequest(api, this.newRow).subscribe((res: any) => {
      console.log("adding user response", res);
      this.topicTableData.push({ ...this.newRow });
    });
  }

}
