**jdl的使用**

官方使用网站
https://www.jhipster.tech/jdl/

**jdl官方**

  JDL是一种JHipster特定的域语言，我们在其中添加了使用简单且用户友好的语法在单个文件（或多个）中描述所有实体及其关系的可能性。

您可以使用我们的在线JDL-Studio IDE来创建JDL及其UML可视化。您也可以创建，导出或共享JDL模型的URL。

**1.先创建一个jdl或者jh文件，在jhipster官网提供的JDL-Studio里创建jh文件**

```java
/** 书 */
entity Book {
    bookName String /** book name */
    writerName String /** author */
}

/**   作者entity   */
entity Author {
    writerName String /** Author name */
    writerBook String /** some write book */
}

relationship OneToMany {
	Author {book} to Book {writer(writerName) required}
}
```
这就是一个简单的jdl文件

**2.然后用jhipster运行这个文件，写入你的项目中**

把jh文件下载下来，直接放在项目目录下，然后运行命令行 输入

jhipster import-jdl my_file.jdl 或 jhipster-uml my_file.jdl

这两个命令是直接帮你在项目中生成所有需要的文件，包括实体类，配置类，非常的到位。。。

如果不想在导入jdl文件时创建实体，可以加--json-only 这个命令

jhipster import-jdl ./my-jdl-file.jdl --json-only

默认情况下，import-jdl仅重新生成已更改的实体，如果要重新生成所有实体，则传入--force 标志。请注意，这将覆盖对实体文件的所有本地更改

jhipster import-jdl ./my-jdl-file.jdl --force

然后运行命令

运行成功就会生成代码。

**3.实体之间的关系，一对多  多对多 什么鬼的**

就自己的一个一对多小例子   更多的可以对着官方语法来写


```java
/** 书 */


entity Book {

    bookName String /** book name */
    writerName String /** author */
}

/**   作者entity   */

entity Author {

    writerName String /** Author name */
    writerBook String /** some write book */
}

relationship OneToMany {
	Author {book} to Book {writer(writerName) required}
}
```



``` java

    

```

![sddsf](df)


jdl对于实体添加验证字段限制，添加实体关系还是很方便好用的。。。