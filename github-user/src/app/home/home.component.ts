import { Component, OnInit } from '@angular/core';
import { GitHubUserService } from '../app.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  inputValue: string = '';
  gitHubData = {
    profilePic: '',
    userName: '',
  };
  gitHubDatas: any[] = [];
  showData: Boolean = false;
  isUser: Boolean = false;
  constructor(private gitHubService: GitHubUserService) {}
  ngOnInit(): void {}

  getData() {
    if (this.inputValue.length > 0) {
      this.gitHubService.getUserData(this.inputValue).subscribe((res) => {
        if (res.id) {
          this.isUser = true;
        } else {
          this.isUser = false;
        }
        let data = {
          id: res.id,
          profilePic: res.avatar_url,
          userName: res.login,
          name: res.name,
          searchName: this.inputValue,
          isUser: this.isUser,
        };
        const storedData = localStorage.getItem('gitHubHistory');
        if (storedData) {
          let parsedData = JSON.parse(storedData);

          parsedData.push(data);
          this.gitHubDatas = parsedData;
          //console.log(parsedData);
        } else {
          this.gitHubDatas.push(data);
        }
        this.gitHubData = data;
        this.showData = true;
        console.log(this.gitHubDatas);
        localStorage.setItem('gitHubHistory', JSON.stringify(this.gitHubDatas));
      });
    }
  }
}
