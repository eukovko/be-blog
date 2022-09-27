import {DocumentClient} from "aws-sdk/lib/dynamodb/document_client";

const AWS = require("aws-sdk");
const dynamo: DocumentClient  = new AWS.DynamoDB.DocumentClient();
const courseTable = process.env.COURSE_TABLE_NAME
const capacityTable = process.env.CAPACITY_TABLE_NAME

async function courseById(id: number) {
    const courseParams = {
        TableName: courseTable,
        Key: {
            id: id
        }
    }
    return await dynamo.get(courseParams).promise()
        .then(data => data.Item);
}

async function capacityById(id: number) {
    const courseParams = {
        TableName: capacityTable,
        Key: {
            id: id
        }
    }
    return await dynamo.get(courseParams).promise()
        .then(data => data.Item);
}

async function allCourses() {
    return await dynamo.scan({TableName: courseTable}).promise()
        .then(data => data.Items)
}
async function allCapacity() {
    return await dynamo.scan({TableName: capacityTable}).promise()
        .then(data => data.Items)
}

export {courseById, capacityById, allCourses, allCapacity}
