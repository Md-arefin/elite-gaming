

const Blog = () => {
    return (
        <div className="space-y-5 px-5">
            {/* Question-1 */}
            <article>
                <h4 className="text-2xl ">What is an access token and refresh token? How do they work and where should we store them on the client-side?</h4>

                <div>
                    <img className="mx-auto my-10 rounded-lg" src="https://i.ibb.co/hmR2scL/Access-Token.jpg" alt="" />
                </div>
                <p>

                    An access token is a credential granted to a user or application after successful authentication, enabling access to specific resources or APIs. It is a time-limited string of characters used to authenticate subsequent requests. In contrast, a refresh token is issued alongside the access token and has a longer lifespan. It allows for the acquisition of a new access token without re-authentication when the original token expires. The refresh token is securely stored on the client-side and provides a means to maintain continuous access. This separation enhances security, limiting access token exposure and providing more control over resource privileges.
                </p>
                <br />
                <p>
                    Access tokens are stored on the client-side and used to authenticate requests to protected resources. They are typically included in the request header or as parameters. Refresh tokens, also stored on the client-side, are used to obtain new access tokens when the original token expires. Access tokens are short-lived, while refresh tokens have a longer lifespan. Client-side storage options include in-memory storage, local/session storage, HTTP-only cookies, or specialized secure storage mechanisms. The chosen storage method should consider security requirements and vulnerabilities like XSS attacks. Safely storing these tokens ensures secure authentication and authorization for accessing resources or APIs.
                </p>
            </article>

            {/* Question-2 */}
            <article>
                <h4 className="text-2xl mx">Compare SQL and NoSQL databases?</h4>
                <div>
                    <img className="my-10 mx-auto rounded" src="https://i.ibb.co/8rhrGJH/differences-between-sql-databases-and-nosql-databases.webp" alt="" />
                </div>
                <div>
               
                    <div  className="overflow-x-auto">
                        <table className="table w-100%">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th></th>
                                    <th  className="text-lg"> Characteristics</th>
                                    <th className="text-lg">Structured Query Language (SQL)</th>

                                    <th  className="text-lg">Not only SQL ( NoSQL)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr className="max-w-md">
                                    <th>1</th>
                                    <td >Data Model</td>
                                    <td> 
                                    SQL databases follow a rigid,<br /> predefined schema   with a fixed structure.  <br /> Data is organized into tables with rows and  <br /> columns,  and relationships between tables are  <br /> established using foreign keys.
                                    
                                    </td>

                                    <td >NoSQL databases offer flexible <br />  and schema-less data models. They can be <br /> categorized into different types: <br />  document-based, key-value, columnar, <br />  or graph databases. Each type has <br /> its own way of organizing and storing data.</td>
                                </tr>
                                {/* row 2 */}
                                <tr>
                                    <th>2</th>
                                    <td>Scalability</td>
                                    <td> SQL databases generally have vertical scalability, <br />   meaning they scale by increasing the hardware <br /> resources of a single server.  Vertical scaling has <br />limits and can become costly for large-scale applications.</td>
                                    <td> NoSQL databases are designed for <br /> horizontal scalability, allowing them to <br /> scale out across multiple servers.<br />  They are more suitable for <br />  handling large amounts of data and high <br /> traffic loads.</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>3</th>
                                    <td>Query Language</td>
                                    <td>SQL databases use a standardized query language (SQL) <br /> for defining and manipulating data.  SQL provides a <br /> powerful and expressive syntax for querying and managing <br /> relational data.</td>
                                    <td> NoSQL databases may have their query <br /> languages specific to their data model.<br />  Some NoSQL databases also support SQL-like query <br />  languages, but with differences in syntax and <br />functionality.</td>
                                </tr>
                                {/* row 4 */}
                                <tr>
                                    <th>4</th>
                                    <td>Data Consistency</td>
                                    <td>SQL databases typically provide strong consistency,<br /> ensuring that data is always in a valid state. ACID <br />(Atomicity, Consistency, Isolation, Durability) properties <br />are commonly enforced.</td>

                                    <td>NoSQL databases often prioritize availability and <br />scalability over strong consistency. They may <br />provide eventual consistency or offer configurable <br />consistency models based on application requirements.</td>
                                </tr>
                                {/* row 5 */}
                                <tr>
                                    <th>5</th>
                                    <td>Use Cases</td>
                                    <td>SQL databases are commonly used for applications <br /> that require complex relationships, transactions, and <br /> strong data consistency. They are well-suited for <br /> structured and relational data.</td>
                                    <td> NoSQL databases excel in handling large-scale,<br /> rapidly changing, and unstructured data.<br /> They are often used in scenarios such as <br />content management, real-time analytics, <br /> caching, and handling high-velocity data.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </article>

            {/* Question-3 */}
            <article>
                <h4 className="text-2xl ">What is express js? What is Nest JS?</h4>
                <div>
                    <img className="mx-auto my-10 rounded-lg" src="https://i.ibb.co/hmR2scL/Access-Token.jpg" alt="" />
                </div>
                <p> </p>
            </article>

            {/* Question-4 */}
            <article>
                <h4 className="text-2xl ">What is MongoDB aggregate and how does it work?</h4>
                <div>
                    <img className="mx-auto my-10 rounded-lg" src="https://i.ibb.co/hmR2scL/Access-Token.jpg" alt="" />
                </div>
                <p> </p>
            </article>
        </div>
    );
};

export default Blog;