import React, { useState } from 'react';
import { Button, Row, Layout, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import * as Dna from '../ocaml_src/dna.bs';
import * as Tree from '../ocaml_src/tree.bs'
import * as Pairwise from '../ocaml_src/pairwise.bs';
import * as Msa from "../ocaml_src/msa.bs"
import * as Distance from "../ocaml_src/distance.bs"
import * as PhyloAlgo from "../ocaml_src/phylo_algo.bs"

import '../App.css';
const { Content } = Layout;

const dnaArr = [];
const names = [];

const parseDNA = async (file, filename) => {
  try {
    const reader = new FileReader();
    reader.onload = () => {
      const dna = Dna.from_string(reader.result);
      dnaArr.push(dna);
      names.push(filename)
    };
    reader.readAsText(file);
  } catch (e) {
    console.log(e);
    console.log('File printing failed');
  }
};



export default function Generate() {
  const [uploadDisabled, setUploadDisabled] = useState(false);
  const generateTree = () => {
    setUploadDisabled(true);
    // if (dnaArr.length < 2) {
    //   alert("Not enough DNA sequences to perform pairwise alignment")
    // }

    const dist_matrix = Distance.dist_dna(dnaArr, 1, (-1), (-1));
    const virus_names = names;
    const tree = PhyloAlgo.upgma(dist_matrix, virus_names);
    console.log(Tree.to_string(tree));
  }

  const fastaUploadProps = {
    accept: '.FASTA, .txt, .fasta',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    disabled: uploadDisabled,
    headers: {
      authorization: 'authorization-text',
    },
    multiple: true,
    transformFile(file) {
      var file_name = file.name.split('.').slice(0, -1).join('.').toUpperCase()
      parseDNA(file, file_name)
    }
  };
  return (
    <div className="wrapper">
      <Content justify="center">
        <Row className="page" justify="center">
          <div>
            <h1>Generate a Phylogenetic Tree</h1>
            <h2>
              By computing similarity scores for DNA samples of species, we can
              infer their species' evolutionary history through time. Begin by
              uploading .FASTA files that contain DNA sequences, or use our
              example DNA sequences.
            </h2>
          </div>
        </Row>
        <Row className="upload" >
          <Upload {...fastaUploadProps}>
            <Button>
              <UploadOutlined /> Upload .FASTA files
            </Button>
          </Upload>
          < Button onClick={() => generateTree()}> Generate tree </Button>
        </Row>
      </Content>
    </div >
  );
}