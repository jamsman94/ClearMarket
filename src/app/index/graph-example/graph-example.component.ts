import { Component, OnInit, ViewChild } from '@angular/core';
import { GraphQueryService } from '../../common/graph-query.service';
import { ElementRef, Renderer2 } from '@angular/core';
import { GraphJson } from '../../common/graph-json';
import * as vis from 'vis';

@Component({
  selector: 'app-graph-example',
  templateUrl: './graph-example.component.html',
  styleUrls: ['./graph-example.component.css']
})
export class GraphExampleComponent implements OnInit {
  @ViewChild('siteConfigNetwork') networkContainer: ElementRef;
  public network: any;
  public retJson: any;
  public data: any;

  constructor(private graphquery: GraphQueryService) { }

  ngOnInit() {
    this.graphquery.queryJSON().subscribe((data: GraphJson) => {
      this.retJson = this.graphquery.JsonConvert(data);
      // console.log(this.retJson);
      this.loadGraph(this.retJson);
    });
  }

  loadGraph(JsonData) {
    const data = {
      nodes: JsonData.nodes,
      edges: JsonData.edges
    };
    console.log(JsonData.nodes);
    console.log(JsonData.edges);
    const options = {
      nodes: {
        shape: 'dot'
      },
      edges: {
        arrows: 'to',
        color: {
          color: 'grey'
        }
      },
      layout: {
        improvedLayout: false
      }
    };
    const container = this.networkContainer.nativeElement;
    this.network = new vis.Network(container, data, options);
  }
}
